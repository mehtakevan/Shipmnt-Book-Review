// controllers/reviewController.js
const Review = require('../models/reviewModel');

// Create a Review
const createReview = async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Reviews with Pagination
const getReviews = async (req, res) => {
  const { page, size} = req.query;
  const limit = parseInt(size);
  const skip = (page - 1) * limit;
  
  try {
    const reviews = await Review.find().skip(skip).limit(limit);
    res.status(200).json(reviews);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a Single Review
const getReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.review_id);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.status(200).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a Review
const updateReview = async (req, res) => {
    const { rating, comment } = req.body; // Destructure rating and comment from the request body
    try {
      const review = await Review.findByIdAndUpdate(
        req.params.review_id,
        { rating, comment },
        { new: true, runValidators: true }
      );
      if (!review) {
        return res.status(404).json({ message: 'Review not found' });
      }
      res.status(200).json(review);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  

// Delete a Review
const deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.review_id);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {deleteReview,createReview,updateReview,getReview,getReviews}