const cron = require("node-cron")
const addBooks = require("../controllers/bookController")


cron.schedule('0 0 * * *', async () => {
    try {
        await addBooks(); 
        console.log('Book data updated successfully.');
    } catch (error) {
        console.error('Error updating book data:', error);
    }
});