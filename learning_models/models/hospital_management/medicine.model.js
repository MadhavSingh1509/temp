import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },

    manufacturer: {
      type: String
    },

    price: {
      type: Number,
      required: true
    },

    stock: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

export const Medicine = mongoose.model("Medicine", medicineSchema);