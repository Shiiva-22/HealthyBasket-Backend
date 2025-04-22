const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema({
  user: {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
  
  },
  comment: {
    type: String,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
});

const reviewsModel = mongoose.model("reviews", reviewsSchema);

module.exports = reviewsModel;
