import mongoose from "mongoose";

import ReadingComprehension from "../models/ReadingComprehension.js";
import ReadingResult from "../models/ReadingResult.js";

import User from "../models/User.js";
import StudentModel from "../models/StudentModel.js";

/* =========================================================
   HELPER
   Find either StudentModel or normal User
   ========================================================= */

const findAccount = async ({ studentId, userId }) => {
  let account = null;
  let accountType = null;

  // -----------------------------------------
  // FIRST: Try StudentModel using studentId
  // -----------------------------------------

  if (
    studentId &&
    mongoose.Types.ObjectId.isValid(studentId)
  ) {
    account = await StudentModel.findById(studentId);

    if (account) {
      accountType = "student";
      return {
        account,
        accountType,
      };
    }
  }

  // -----------------------------------------
  // SECOND: Try normal User using userId
  // -----------------------------------------

  if (
    userId &&
    mongoose.Types.ObjectId.isValid(userId)
  ) {
    account = await User.findById(userId);

    if (account) {
      accountType = "user";

      return {
        account,
        accountType,
      };
    }
  }

  // -----------------------------------------
  // THIRD: Sometimes frontend sends user ID
  // through studentId
  // -----------------------------------------

  if (
    studentId &&
    mongoose.Types.ObjectId.isValid(studentId)
  ) {
    account = await User.findById(studentId);

    if (account) {
      accountType = "user";

      return {
        account,
        accountType,
      };
    }
  }

  return {
    account: null,
    accountType: null,
  };
};


/* =========================================================
   GET ALL READING COMPREHENSIONS
   ========================================================= */

export const getAllReadings = async (req, res) => {
  try {
    const readings =
      await ReadingComprehension.find({
        isActive: true,
      }).sort({
        grade: 1,
        createdAt: -1,
      });

    return res.status(200).json({
      success: true,
      data: readings,
    });

  } catch (error) {
    console.error(
      "❌ getAllReadings:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


/* =========================================================
   GET READING BY ID
   ========================================================= */

export const getReadingById = async (
  req,
  res
) => {
  try {
    const reading =
      await ReadingComprehension.findById(
        req.params.id
      );

    if (!reading) {
      return res.status(404).json({
        success: false,
        message:
          "Reading comprehension not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: reading,
    });

  } catch (error) {
    console.error(
      "❌ getReadingById:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


/* =========================================================
   GET UNFINISHED READING STORIES
   =========================================================

   GET:

   /api/reading/grade/1?studentId=XXXX

   OR

   /api/reading/grade/1?userId=XXXX

   Returns ONLY stories that are not completed.
   ========================================================= */

export const getUnfinishedReadingStories =
  async (req, res) => {
    try {
      const { grade } = req.params;

      const {
        studentId,
        userId,
      } = req.query;

      // -----------------------------------------
      // Validate grade
      // -----------------------------------------

      if (!grade) {
        return res.status(400).json({
          success: false,
          message: "Grade is required.",
        });
      }

      const gradeNumber = Number(grade);

      if (
        Number.isNaN(gradeNumber)
      ) {
        return res.status(400).json({
          success: false,
          message: "Invalid grade.",
        });
      }

      // -----------------------------------------
      // Validate user/student
      // -----------------------------------------

      if (!studentId && !userId) {
        return res.status(400).json({
          success: false,
          message:
            "studentId or userId is required.",
        });
      }

      // -----------------------------------------
      // Find account
      // -----------------------------------------

      const {
        account,
        accountType,
      } = await findAccount({
        studentId,
        userId,
      });

      if (!account) {
        return res.status(404).json({
          success: false,
          message:
            "User or student account not found.",
        });
      }

      // -----------------------------------------
      // Completed story IDs
      // -----------------------------------------

      const completedStories =
        Array.isArray(
          account.completedStories
        )
          ? account.completedStories.map(
              (id) => String(id)
            )
          : [];

      console.log(
        "================================"
      );

      console.log(
        "GET UNFINISHED STORIES"
      );

      console.log(
        "Grade:",
        gradeNumber
      );

      console.log(
        "Account:",
        account._id.toString()
      );

      console.log(
        "Account Type:",
        accountType
      );

      console.log(
        "Completed Stories:",
        completedStories
      );

      console.log(
        "================================"
      );

      // -----------------------------------------
      // Find unfinished stories
      // -----------------------------------------

      const stories =
        await ReadingComprehension.find({
          grade: gradeNumber,

          isActive: true,

          _id: {
            $nin: completedStories,
          },

        })
          .sort({
            createdAt: 1,
          })
          .lean();

      console.log(
        "Total unfinished stories:",
        stories.length
      );

      // -----------------------------------------
      // Response
      // -----------------------------------------

      return res.status(200).json({
        success: true,

        count: stories.length,

        data: stories,

        completedStories,

        remainingCount:
          stories.length,

        accountType,
      });

    } catch (error) {
      console.error(
        "❌ getUnfinishedReadingStories:",
        error
      );

      return res.status(500).json({
        success: false,
        message:
          "Failed to fetch reading stories.",
        error: error.message,
      });
    }
  };


/* =========================================================
   GET READING BY GRADE
   =========================================================

   IMPORTANT:

   This now uses the SAME completion system as
   getUnfinishedReadingStories.

   Therefore there is no ReadingResult-based
   filtering here.
   ========================================================= */

export const getReadingByGrade =
  getUnfinishedReadingStories;


/* =========================================================
   COMPLETE READING STORY
   =========================================================

   POST:

   /api/reading/complete

   Body:

   {
     studentId: "...",
     storyId: "...",
     score: 7
   }

   OR

   {
     userId: "...",
     storyId: "...",
     score: 7
   }

   ========================================================= */

export const completeReadingStory =
  async (req, res) => {
    try {
      const {
        studentId,
        userId,
        storyId,
        score,
      } = req.body;

      // -----------------------------------------
      // Validate story ID
      // -----------------------------------------

      if (!storyId) {
        return res.status(400).json({
          success: false,
          message:
            "storyId is required.",
        });
      }

      if (
        !mongoose.Types.ObjectId.isValid(
          storyId
        )
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Invalid storyId.",
        });
      }

      // -----------------------------------------
      // Validate account ID
      // -----------------------------------------

      if (!studentId && !userId) {
        return res.status(400).json({
          success: false,
          message:
            "studentId or userId is required.",
        });
      }

      // -----------------------------------------
      // Check story exists
      // -----------------------------------------

      const story =
        await ReadingComprehension.findById(
          storyId
        );

      if (!story) {
        return res.status(404).json({
          success: false,
          message:
            "Reading story not found.",
        });
      }

      // -----------------------------------------
      // Find account
      // -----------------------------------------

      const {
        account,
        accountType,
      } = await findAccount({
        studentId,
        userId,
      });

      if (!account) {
        return res.status(404).json({
          success: false,
          message:
            "User or student account not found.",
        });
      }

      // -----------------------------------------
      // Save story ID
      //
      // $addToSet = no duplicates
      // -----------------------------------------

      let updatedAccount;

      if (accountType === "student") {

        updatedAccount =
          await StudentModel.findByIdAndUpdate(
            account._id,

            {
              $addToSet: {
                completedStories:
                  String(storyId),
              },
            },

            {
              new: true,
            }
          );

      } else {

        updatedAccount =
          await User.findByIdAndUpdate(
            account._id,

            {
              $addToSet: {
                completedStories:
                  String(storyId),
              },
            },

            {
              new: true,
            }
          );
      }

      // -----------------------------------------
      // Response
      // -----------------------------------------

      return res.status(200).json({
        success: true,

        message:
          "Reading story completed successfully.",

        storyId:
          String(storyId),

        score:
          typeof score === "number"
            ? score
            : Number(score) || 0,

        completedStories:
          updatedAccount
            ?.completedStories || [],

        accountType,
      });

    } catch (error) {
      console.error(
        "❌ completeReadingStory:",
        error
      );

      return res.status(500).json({
        success: false,

        message:
          "Failed to save completed story.",

        error: error.message,
      });
    }
  };


/* =========================================================
   CREATE READING
   ========================================================= */

export const createReading = async (
  req,
  res
) => {
  try {
    const reading =
      await ReadingComprehension.create(
        req.body
      );

    return res.status(201).json({
      success: true,

      message:
        "Reading comprehension created successfully",

      data: reading,
    });

  } catch (error) {
    console.error(
      "❌ createReading:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


/* =========================================================
   UPDATE READING
   ========================================================= */

export const updateReading = async (
  req,
  res
) => {
  try {
    const reading =
      await ReadingComprehension.findByIdAndUpdate(
        req.params.id,

        req.body,

        {
          new: true,
          runValidators: true,
        }
      );

    if (!reading) {
      return res.status(404).json({
        success: false,

        message:
          "Reading comprehension not found",
      });
    }

    return res.status(200).json({
      success: true,

      message:
        "Reading comprehension updated successfully",

      data: reading,
    });

  } catch (error) {
    console.error(
      "❌ updateReading:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


/* =========================================================
   DELETE READING
   ========================================================= */

export const deleteReading = async (
  req,
  res
) => {
  try {
    const reading =
      await ReadingComprehension.findByIdAndDelete(
        req.params.id
      );

    if (!reading) {
      return res.status(404).json({
        success: false,

        message:
          "Reading comprehension not found",
      });
    }

    return res.status(200).json({
      success: true,

      message:
        "Reading comprehension deleted successfully",
    });

  } catch (error) {
    console.error(
      "❌ deleteReading:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


/* =========================================================
   SUBMIT READING RESULT
   =========================================================

   This is kept for your existing results/dashboard
   functionality.

   NOTE:
   Completion tracking is handled separately by
   completeReadingStory().
   ========================================================= */

export const submitReadingResult =
  async (req, res) => {
    try {
      const {
        studentId,
        readingId,
        answers,
      } = req.body;

      // -----------------------------------------
      // Validate
      // -----------------------------------------

      if (!studentId) {
        return res.status(400).json({
          success: false,
          message:
            "studentId is required.",
        });
      }

      if (!readingId) {
        return res.status(400).json({
          success: false,
          message:
            "readingId is required.",
        });
      }

      const reading =
        await ReadingComprehension.findById(
          readingId
        );

      if (!reading) {
        return res.status(404).json({
          success: false,
          message:
            "Reading comprehension not found",
        });
      }

      // -----------------------------------------
      // Calculate score
      // -----------------------------------------

      let score = 0;

      const checkedAnswers =
        reading.questions.map(
          (question, index) => {

            const selectedAnswer =
              answers?.[index] || "";

            const isCorrect =
              String(selectedAnswer).trim() ===
              String(question.answer).trim();

            if (isCorrect) {
              score++;
            }

            return {
              questionIndex: index,

              selectedAnswer,

              correctAnswer:
                question.answer,

              isCorrect,
            };
          }
        );

      const totalQuestions =
        reading.questions.length;

      const percentage =
        totalQuestions > 0
          ? Math.round(
              (score /
                totalQuestions) *
                100
            )
          : 0;

      // -----------------------------------------
      // Save result
      // -----------------------------------------

      const result =
        await ReadingResult.create({
          studentId,

          readingId,

          grade:
            reading.grade,

          score,

          totalQuestions,

          percentage,

          answers:
            checkedAnswers,
        });

      // -----------------------------------------
      // IMPORTANT
      //
      // Also mark story as completed.
      //
      // This makes this old endpoint compatible
      // with the new completedStories system.
      // -----------------------------------------

      if (
        mongoose.Types.ObjectId.isValid(
          studentId
        )
      ) {
        await StudentModel.findByIdAndUpdate(
          studentId,

          {
            $addToSet: {
              completedStories:
                String(readingId),
            },
          }
        );
      }

      return res.status(200).json({
        success: true,

        message:
          "Result saved successfully",

        data: {
          resultId:
            result._id,

          score,

          totalQuestions,

          percentage,

          answers:
            checkedAnswers,
        },
      });

    } catch (error) {
      console.error(
        "❌ submitReadingResult:",
        error
      );

      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };


/* =========================================================
   GET STUDENT RESULTS
   ========================================================= */

export const getStudentReadingResults =
  async (req, res) => {
    try {
      const {
        studentId,
      } = req.params;

      const results =
        await ReadingResult.find({
          studentId,
        })
          .populate(
            "readingId",
            "title grade difficulty"
          )
          .sort({
            createdAt: -1,
          });

      return res.status(200).json({
        success: true,
        data: results,
      });

    } catch (error) {
      console.error(
        "❌ getStudentReadingResults:",
        error
      );

      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };