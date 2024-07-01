const mongoose = require('mongoose');

const bookModel = new mongoose.Schema({
  author_key: [{ type: String  }],
  autho_name: [{ type: String }],
  title: { type: String, }
}, { timestamps: true });

const Book = mongoose.model('Book', bookModel);

module.exports = Book;
