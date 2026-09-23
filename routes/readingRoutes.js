
import express from "express";

import {
  getAllReadings,
  getReadingById,
  getReadingByGrade,
  createReading,
  updateReading,
  deleteReading,
  submitReadingResult,
  getStudentReadingResults,
  completeReadingStory,
} from "../controllers/readingController.js";

const router = express.Router();

/* =========================================================
   GET ALL READINGS
   GET /api/reading
   ========================================================= */

router.get(
  "/",
  getAllReadings
);


/* =========================================================
   GET UNFINISHED READINGS BY GRADE
   GET /api/reading/grade/4?studentId=XXXX
   GET /api/reading/grade/4?userId=XXXX
   ========================================================= */

router.get(
  "/grade/:grade",
  getReadingByGrade
);


/* =========================================================
   COMPLETE READING STORY
   POST /api/reading/complete

   Student:
   {
     "studentId": "STUDENT_ID",
     "storyId": "STORY_ID",
     "score": 7
   }

   Normal User:
   {
     "userId": "USER_ID",
     "storyId": "STORY_ID",
     "score": 7
   }
   ========================================================= */

router.post(
  "/complete",
  completeReadingStory
);


/* =========================================================
   GET READING BY ID
   GET /api/reading/:id
   ========================================================= */

router.get(
  "/:id",
  getReadingById
);


/* =========================================================
   CREATE READING
   POST /api/reading
   ========================================================= */

router.post(
  "/",
  createReading
);


/* =========================================================
   UPDATE READING
   PUT /api/reading/:id
   ========================================================= */

router.put(
  "/:id",
  updateReading
);


/* =========================================================
   DELETE READING
   DELETE /api/reading/:id
   ========================================================= */

router.delete(
  "/:id",
  deleteReading
);


/* =========================================================
   SUBMIT READING RESULT
   POST /api/reading/result
   ========================================================= */

router.post(
  "/result",
  submitReadingResult
);


/* =========================================================
   GET STUDENT READING RESULTS
   GET /api/reading/results/student/:studentId
   ========================================================= */

router.get(
  "/results/student/:studentId",
  getStudentReadingResults
);


export default router;

