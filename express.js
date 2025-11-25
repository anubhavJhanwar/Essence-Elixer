// Middleware
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');
const multer = require('multer');




const PORT = 5000;

const app = express();

app.use(express.static('C:/Users/USER ACER/Desktop/WEBSITE(FINAL)/Essence-Elixir/public'));

// Route to serve the HTML file
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const session = require('express-session');
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));


// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));


// Middleware for handling form data and file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');  // Directory to store uploaded images
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));  // Unique filename
    }
});
const upload = multer({ storage: storage });

// Use routes defined in the './routes/app.js' file
app.use('/', require(path.join(__dirname, 'routes', 'app.js')));

app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    next();
});


// MongoDB connection
let dbconnect = require('./connectdb/connect.js');
dbconnect(); // Initialize MongoDB connection

app.get('/', (req, res) => {
    res.render('index', { title: 'Welcome to Essence Elixir' });
});




// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve uploaded files

app.post('/add-perfume', upload.single('image'), async (req, res) => {
    try {
        const { name, discountedPrice, actualPrice } = req.body;
        const image = req.file.path;

        const newPerfume = new Perfume({
            name,
            discountedPrice,
            actualPrice,
            image,
        });

        await newPerfume.save();
        res.status(201).send('Perfume added successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while adding the perfume.');
    }
});



app.use(session({
    secret: 'yourSecretKey', // Use a secure and unique secret
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // For local development, set secure to false. In production, set to true with HTTPS
}));

app.get('/retailer', (req, res) => {
    res.render('retailer'); // Render the retail.ejs file
});

app.get('/retailershop', async (req, res) => {
    try {
        const perfumes = await Perfume.find(); // Fetch all perfume records from MongoDB
        res.render('retailershop', { perfumes }); // Pass the data to the EJS template
    } catch (error) {
        console.error("Error fetching perfumes:", error);
        res.status(500).send("An error occurred while fetching perfumes.");
    }
});



////<<<<<<<<<<<<<<<<<

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
const Perfume = require('./models/Perfume'); // Adjust the path based on your project structure

/////>>>>>>>>>>>>>>>>>>

// Static files and views setup
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});