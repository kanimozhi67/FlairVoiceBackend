import mongoose from "mongoose";

const readingResultSchema =
  new mongoose.Schema(
    {
      studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      readingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ReadingComprehension",
        required: true,
      },

      grade: {
        type: Number,
        required: true,
      },

      score: {
        type: Number,
        required: true,
      },

      totalQuestions: {
        type: Number,
        required: true,
      },

      percentage: {
        type: Number,
        required: true,
      },

      answers: [
        {
          questionIndex: Number,
          selectedAnswer: String,
          correctAnswer: String,
          isCorrect: Boolean,
        },
      ],

      completedAt: {
        type: Date,
        default: Date.now,
      },
    },
    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "ReadingResult",
  readingResultSchema
);