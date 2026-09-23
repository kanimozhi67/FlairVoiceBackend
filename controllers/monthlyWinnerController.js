import MonthlyWinner from "../models/MonthlyWinner.js";
import UserProgress from "../models/UserProgress.js";
import StudentModel from "../models/StudentModel.js";
import User from "../models/User.js";


// =====================================================
// GET PREVIOUS MONTH WINNER
// GET /api/quiz/progress/student-of-month
// =====================================================

export const getPreviousMonthWinner = async (req, res) => {
  try {
    const now = new Date();

    // Previous month
    const previousMonthDate = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      1
    );

    const year = previousMonthDate.getFullYear();
    const monthNumber = previousMonthDate.getMonth();

    const month = previousMonthDate.toLocaleString(
      "default",
      {
        month: "long",
      }
    );

    const winner = await MonthlyWinner.findOne({
      year,
      monthNumber,
    }).lean();

    return res.status(200).json({
      success: true,
      month,
      year,
      winner: winner || null,
    });
  } catch (error) {
    console.error(
      "Get previous month winner error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to get previous month winner",
    });
  }
};


// =====================================================
// GENERATE PREVIOUS MONTH WINNER
// POST /api/quiz/progress/student-of-month/generate
// =====================================================

export const generatePreviousMonthWinner = async (req, res) => {
  try {
    const now = new Date();

    // ================================================
    // PREVIOUS MONTH
    // ================================================

    const previousMonthDate = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      1
    );

    const year = previousMonthDate.getFullYear();
    const monthNumber = previousMonthDate.getMonth();

    const month = previousMonthDate.toLocaleString(
      "default",
      {
        month: "long",
      }
    );

    // ================================================
    // CHECK IF WINNER ALREADY EXISTS
    // ================================================

    const existingWinner = await MonthlyWinner.findOne({
      year,
      monthNumber,
    });

    if (existingWinner) {
      return res.status(200).json({
        success: true,
        message: "Winner already exists",
        winner: existingWinner,
      });
    }

    // ================================================
    // CREATE DATE RANGE
    // ================================================

    const monthStart = new Date(
      year,
      monthNumber,
      1
    );

    const nextMonthStart = new Date(
      year,
      monthNumber + 1,
      1
    );

    // Convert to YYYY-MM-DD
    const startDayKey = `${year}-${String(
      monthNumber + 1
    ).padStart(2, "0")}-01`;

    const nextMonthYear = nextMonthStart.getFullYear();

    const nextMonthNumber =
      nextMonthStart.getMonth() + 1;

    const endDayKey = `${nextMonthYear}-${String(
      nextMonthNumber
    ).padStart(2, "0")}-01`;

    console.log("Monthly winner calculation:");
    console.log("Start:", startDayKey);
    console.log("End:", endDayKey);

    // ================================================
    // CALCULATE TOTAL SCORE
    // ================================================

    const leaderboard = await UserProgress.aggregate([
      {
        $match: {
          dayKey: {
            $gte: startDayKey,
            $lt: endDayKey,
          },
        },
      },

      {
        $group: {
          _id: {
            ownerId: "$ownerId",
            ownerType: "$ownerType",
          },

          points: {
            $sum: "$score",
          },
        },
      },

      {
        $sort: {
          points: -1,
        },
      },

      {
        $limit: 1,
      },
    ]);

    console.log(
      "Monthly leaderboard:",
      leaderboard
    );

    if (!leaderboard.length) {
      return res.status(404).json({
        success: false,
        message: `No points found for ${month} ${year}`,
      });
    }

    const winnerData = leaderboard[0];

    const winnerId = winnerData._id.ownerId;
    const winnerType = winnerData._id.ownerType;
    const winnerPoints = winnerData.points;

    // ================================================
    // FIND USER
    // ================================================

    let winnerUser = null;

    if (winnerType === "Student") {
      winnerUser = await StudentModel.findById(
        winnerId
      ).lean();
    }

    if (winnerType === "User") {
      winnerUser = await User.findById(
        winnerId
      ).lean();
    }

    if (!winnerUser) {
      return res.status(404).json({
        success: false,
        message: "Winner user was not found",
      });
    }

    // ================================================
    // SAVE WINNER
    // ================================================

    const winner = await MonthlyWinner.create({
      month,

      monthNumber,

      year,

      ownerId: winnerUser._id,

      ownerType: winnerType,

      username: winnerUser.username,

      points: winnerPoints,

      avatar:
        winnerUser.avatar ||
        "/img/rabbitAvatar.png",

      school:
        winnerType === "Student"
          ? winnerUser.school
          : null,
    });

    return res.status(201).json({
      success: true,

      message: `Winner for ${month} ${year} created successfully`,

      winner,
    });
  } catch (error) {
    console.error(
      "Generate monthly winner error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to generate monthly winner",

      error: error.message,
    });
  }
};