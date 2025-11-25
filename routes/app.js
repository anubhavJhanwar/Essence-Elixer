const express = require('express');
const bcrypt = require('bcrypt');  // This imports bcryptjs
const User = require('../models/User');  // Import the User model
const Perfume = require('../models/Perfume'); // Ensure Perfume model is imported
const multer = require('multer');  // <-- Add this line at the top of your file
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });
});

router.get('/index_perfume', (req, res) => {
    res.render('index_perfume', { title: 'Perfumes' });
});

router.get('/designer', (req, res) => {
    res.render('designer', { title: 'Designers' });
});

router.get('/attar', (req, res) => {
    res.render('attar', { title: 'Attars' });
});

router.get('/deos', (req, res) => {
    res.render('deos', { title: 'Deos' });
});

router.get('/bestsellers', (req, res) => {
    res.render('bestsellers', { title: 'Bestsellers' });
});

router.get('/combos', (req, res) => {
    res.render('combos', { title: 'Combos' });
});


router.get('/cart', (req, res) => {
    res.render('cart', { title: 'Cart' });
});

router.get('/afnan', (req, res) => {
    res.render('innerParfum/afnan', { title: 'Afnan' });
});

router.get('/armaf', (req, res) => {
    res.render('innerParfum/armaf', { title: 'Armaf' });
});

router.get('/davidoff', (req, res) => {
    res.render('innerParfum/davidoff', { title: 'Davidoff' });
});

router.get('/beardo', (req, res) => {
    res.render('innerParfum/beardo', { title: 'Beardo' });
});



router.use(express.urlencoded({ extended: true }));

// Render Sign-Up Page (GET)
router.get('/signup', (req, res) => {
    res.render('singup', { title: 'Sign Up' });
});

// Handle Sign-Up Form Submission (POST)

router.post('/signup', async (req, res) => {
    const { name, mobile, email, password, recheck } = req.body;

    // Log the incoming request data for debugging
    console.log("Request body:", req.body);

    // Validate that all fields are filled
    if (!name || !mobile || !email || !password || !recheck) {
        return res.status(400).send('All fields are required!');
    }

    // Check if passwords match
    if (password !== recheck) {
        return res.status(400).send('Passwords do not match!');
    }

    try {
        // Check if the email already exists in the database
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send('Email already registered');
        }

        // Hash the password before saving it
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user object
        const newUser = new User({
            name,
            mobile,
            email,
            password: hashedPassword,
        });

        // Save the user to the database
        await newUser.save();

        // Send success response
        // res.status(201).send('User registered successfully!');
        res.redirect('/');
    } catch (error) {
        // Log the error and send failure response
        console.error("Error during registration:", error);  // Log the error in the server console
        res.status(500).send(`Error registering user: ${error.message}`);  // Send detailed error message
    }
});

router.get('/signin', (req, res) => {
    res.render('sigin', { title: 'Sign In' });
});

// Handle Sign-In Form Submission (POST)
// Sign-In Route (GET)
router.get('/signin', (req, res) => {
    res.render('signin', { title: 'Sign In' }); // Correct the typo "sigin" to "signin" if it's a typo
});

// Handle Sign-In Form Submission (POST)
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    // Log the incoming request data for debugging
    console.log("Sign-In Request Body:", req.body);

    // Validate input fields
    if (!email || !password) {
        return res.status(400).send('Email and password are required!');
    }

    try {
        // Check if the user exists in the database
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send('Invalid email or password!');
        }

        // Compare the entered password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send('Invalid email or password!');
        }

        // If authentication is successful, store user in session
        req.session.user = user; // Save user data to session

        // Redirect to index.ejs (home page) after successful login
        res.redirect('/');  // This assumes you have a route to render index.ejs

    } catch (error) {
        // Log the error and send failure response
        console.error("Error during sign-in:", error);
        res.status(500).send(`Error logging in: ${error.message}`);
    }
});

module.exports = router;

// Middleware to protect routes
function isAuthenticated(req, res, next) {
    if (req.session.user) {
        return next();
    }
    res.redirect('/signin');
}

// Use the middleware for /index
router.get('/index', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Example protected route (Dashboard)
router.get('/dashboard', isAuthenticated, (req, res) => {
    res.render('dashboard', { user: req.session.user });
});

router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error("Error during logout:", err);
            return res.status(500).send('Unable to log out!');
        }
        res.redirect('/'); // Redirect to home page
    });
});

////////








module.exports = router;