const mongoose = require('mongoose');

const reviewModel = new mongoose.Schema({
  book_id: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true }
}, { timestamps: true });

const Review = mongoose.model('Review', reviewModel);

module.exports = Review;
