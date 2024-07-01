const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes")
const reviewRoutes = require("./routes/reviewRoutes")
const bookRoutes = require("./routes/bookRoutes")
const cronJobs = require("./cron-jobs/my-cron-jobs");

dotenv.config({path:"./.env"});

connectDB();
const app = express();
app.use(express.json())

app.use("/api/user",userRoutes)
app.use("/api",reviewRoutes)
app.use("/api/books",bookRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`);
});