import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },

    password: {
      type: String,
      required: true
    },

    // Tells us what kind of user this is
    role: {
      type: String,
      enum: ["admin", "doctor", "patient"],
      default: "patient"
    }
  },
  {
    timestamps: true
  }
);

export const User = mongoose.model("User", userSchema);