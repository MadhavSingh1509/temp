import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    // Doctor for this appointment
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true
    },

    // Patient who booked the appointment
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true
    },

    date: {
      type: Date,
      required: true
    },

    reason: {
      type: String,
      required: true
    },

    status: {
      type: String,
      enum: ["scheduled", "completed", "cancelled"],
      default: "scheduled"
    }
  },
  {
    timestamps: true
  }
);

export const Appointment = mongoose.model(
  "Appointment",
  appointmentSchema
);