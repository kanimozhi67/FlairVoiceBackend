import mongoose from "mongoose";

const monthlyWinnerSchema = new mongoose.Schema(
  {
    month: {
      type: String,
      required: true,
    },

    monthNumber: {
      type: Number,
      required: true,
      min: 0,
      max: 11,
    },

    year: {
      type: Number,
      required: true,
    },

    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },

    ownerType: {
      type: String,
      enum: ["User", "Student"],
      required: true,
    },

    username: {
      type: String,
      required: true,
    },

    points: {
      type: Number,
      required: true,
      default: 0,
    },

    avatar: {
      type: String,
      default: "/img/rabbitAvatar.png",
    },

    // Only populated for school students
    school: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// One global winner per month
monthlyWinnerSchema.index(
  {
    year: 1,
    monthNumber: 1,
  },
  {
    unique: true,
  }
);

export default mongoose.model(
  "MonthlyWinner",
  monthlyWinnerSchema
);