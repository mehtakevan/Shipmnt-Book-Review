const Book = require("../models/bookModel")
const scrapeTrendingBooks = require("../utils/scraper")

const addBooks = async(req,res)=>{
    const books = await scrapeTrendingBooks();

    for(const book of books){
        const bk = await Book.findOne({title : book.title});
        if(!bk){
            await Book.create({
                author_key : book.author_key,
                autho_name : book.autho_name,
                title : book.title
            });
        }
    }
    res.status(200).send("Books Added");
}

const getbook = async(req,res)=>{
const { page, size} = req.query;
  const limit = parseInt(size);
  const skip = (page - 1) * limit;
  
  try {
    const books = await Book.find().skip(skip).limit(limit);
    res.status(200).json(books);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {getbook,addBooks};