import mongoose from "mongoose";

const studentsSchema = new mongoose.Schema(
  {
    school: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      sparse: true, // allows null emails
    },
    avatar: {
      type: String,
      default: "/img/rabbitAvatar.png",
    },
  completedStories: {
  type: [String],
  default: [],
},
    sticker: {
      type: [String],
      default: [],
    },
    password: {
      type: String,
      required: true,
    },
    rollNo: {
      type: String,
      unique: true,
      required: true,
    },
    className: {
      type: String,
      default: "App Class",
    },
    section: {
      type: String,
      default: "App Section",
    },
    level: {
      type: String,
      enum: ["kindergarten", "primary"], // 🔥 required for distinction
      required: true,
    },
    role: {
      type: String,
      enum: ["Student"],
      default: "Student",
    },
  },
  { timestamps: true }
);

export default mongoose.model("StudentModel", studentsSchema);
