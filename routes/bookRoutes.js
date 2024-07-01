const express = require("express");
const {
  addBooks,
  getbook
} = require("../controllers/bookController");

const router = express.Router();

router.get('/add',addBooks);
router.get('/',getbook)

module.exports = router;