const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB connection string from environment variable
const db = process.env.MONGODB_URI;

// Async function to connect to the database
const dbconnect = async () => {
    try {
        // Connect to MongoDB with additional options
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected successfully");
    } catch (err) {
        console.log("Error connecting to the database: ", err);
    }
};

// Export the connection function
module.exports = dbconnect;
