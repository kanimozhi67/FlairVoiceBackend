import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },

    email: { type: String, required: true, unique: true },

    avatar: {
      type: String,
      default: "/img/rabbitAvatar.png",
    },

    sticker: {
      type: [String],
      default: [],
    },

    password: { type: String, required: true },

    level: {
      type: String,
      enum: ["kindergarten", "primary"],
      required: true,
    },
completedStories: {
  type: [String],
  default: [],
},
    role: {
      type: String,
      enum: ["User", "Admin"],
      default: "User",
    },

    // 🔥 PAYMENT FIELDS
    isPremium: {
      type: Boolean,
      default: false,
    },

   
      subscription: {
      plan: {
        type: String,
        enum: ["monthly", "yearly"],
        default: null,
      },
     expiresAt: {
        type: Date,
        default: null,
      },
    },
stripeCustomerId: {
  type: String,
},

  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
