const mongoose = require('mongoose');

// MongoDB connection string
const db = "mongodb+srv://suvansh:1TclRgaRcfSDje2E@webdev1.bmydv.mongodb.net/?retryWrites=true&w=majority&appName=webdev1";

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
