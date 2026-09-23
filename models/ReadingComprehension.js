import mongoose from "mongoose";

const vocabularySchema = new mongoose.Schema(
  {
    word: {
      type: String,
      required: true,
      trim: true,
    },

    meaning: {
      type: String,
      required: true,
      trim: true,
    },

    example: {
      type: String,
      default: "",
    },
  },
  { _id: false }
);

const questionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      enum: [
        "mcq",
        "true_false",
        "fill_blank",
      ],
      default: "mcq",
    },

    options: {
      type: [String],
      default: [],
    },

    answer: {
      type: String,
      required: true,
    },

    explanation: {
      type: String,
      default: "",
    },
  },
  { _id: false }
);

const readingComprehensionSchema =
  new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        trim: true,
      },

      grade: {
        type: Number,
        required: true,
      },

      category: {
        type: String,
        default: "Reading Comprehension",
      },

      passage: {
        type: String,
        required: true,
      },

      vocabulary: {
        type: [vocabularySchema],
        default: [],
      },

      questions: {
        type: [questionSchema],
        default: [],
      },

      difficulty: {
        type: String,
        enum: [
          "easy",
          "medium",
          "hard",
          "very hard",
        ],
        default: "easy",
      },

      estimatedTime: {
        type: Number,
        default: 10,
      },

      isActive: {
        type: Boolean,
        default: true,
      },
    },
    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "ReadingComprehension",
  readingComprehensionSchema
);