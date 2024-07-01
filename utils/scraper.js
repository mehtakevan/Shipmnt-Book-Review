const axios = require('axios');
const cheerio = require('cheerio');

const scrapeTrendingBooks = async function(){
  const url = 'https://openlibrary.org/trending/daily';
  console.log(`Starting scraping: ${new Date().toISOString()}`);

  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const arrayobjects = await Object.values(response.data.works);

    const books = [];
    
    for(let i=0;i<arrayobjects.length;i++){
      const obj = arrayobjects[i];
      const author_key = (obj.author_key);
      const author_name = (obj.author_name);
      const first_publish_year = (obj.fist_publish_year);
      const title = (obj.title);
      books.push({author_key,author_name,first_publish_year,title});
    }
    return books;
  } catch (error) {
    console.error('Error scraping:', error.message);
    return [];
  }
};

module.exports =  scrapeTrendingBooks ;
