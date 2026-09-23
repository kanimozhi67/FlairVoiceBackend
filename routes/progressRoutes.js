import express from "express";
import auth from "../middleware/authMiddleware.js";
import {
  addPoints,
  getTodayPoints,
  getProgressSummary,
  leaderboard,
  schoolLeaderboard,
} from "../controllers/progressController.js";

import {
  getPreviousMonthWinner,
  generatePreviousMonthWinner,
} from "../controllers/monthlyWinnerController.js";

const router = express.Router();

// Add points to user's progress
router.post("/addpoints", auth, addPoints);

// Get today's points for the logged-in user
router.get("/today", auth, getTodayPoints);
router.get("/leaderbd", leaderboard);
router.get("/schoolleaderbd", schoolLeaderboard);

// Get overall progress summary (weekly, monthly, total, etc.)
router.get("/summary", auth, getProgressSummary);
router.get(
  "/student-of-month",
  getPreviousMonthWinner
);

router.post(
  "/student-of-month/generate",
  generatePreviousMonthWinner
);

export default router;
