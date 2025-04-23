const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name: Required..!!"],
      trim: true,
    },
    rate: {
      type: mongoose.Schema.Types.Decimal128, // ✅ Using Decimal128 for price as well
      required: [true, "Price: Required..!!"],
      min: [0, "Price must be a positive number"],
    },
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
      required: [true, "Enter Category Name"],
    },
    stocks: {
      type: Number,
      required: [true, "Stock: Required..!!"],
      min: [0, "Stock must be a positive number"], // ✅ Validate stock to be positive
    },
    kilogramOption: [
      {
        type: mongoose.Schema.Types.Decimal128,
        required: [true, "KG: Required..!!"],
        default: 0.5, // Default to 0.5 kg if not provided
      },
    ],
    numOfReviews: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true, // ✅ Add timestamps (createdAt and updatedAt)
  }
);

const productModel = mongoose.model("Product", productSchema); // Changed collection name to "Product" for clarity

module.exports = productModel;
