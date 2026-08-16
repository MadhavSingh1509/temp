import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    age: {
      type: Number,
      required: true
    },

    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true
    },

    phone: {
      type: String,
      required: true
    },

    // Link patient to their User account
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

export const Patient = mongoose.model("Patient", patientSchema);