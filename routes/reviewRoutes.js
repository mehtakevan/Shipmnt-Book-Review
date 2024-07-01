const express = require("express");
const {
    createReview,
    updateReview,
    getReview,
    getReviews,
    deleteReview
} = require("../controllers/reviewController");
const { protect } = require("../middleware/authmiddleware");

const router = express.Router();

//Create A Review
router.route('/reviews').post(protect,createReview)

// Get All Reviews with Pagination
router.route('/reviews').get(protect,getReviews);

// Get a Single Review
router.route('/reviews/:review_id').get(protect,getReview);

// Update a Review
router.route('/reviews/:review_id').put(protect,updateReview);

// Delete a Review
router.route('/reviews/:review_id').delete(protect,deleteReview);

module.exports = router;