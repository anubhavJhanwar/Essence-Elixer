# Essence Elixir 🌸

A modern e-commerce platform for premium fragrances, perfumes, and deodorants. Essence Elixir offers a curated selection of scents designed to elevate your everyday experience.

## 🚀 Features

- **Product Catalog**: Browse through perfumes, attars, deodorants, designer fragrances, and combos
- **User Authentication**: Secure sign-up and login functionality
- **Shopping Cart**: Add products to cart and manage your selections
- **Search Functionality**: Quick search to find your favorite fragrances
- **Retailer Dashboard**: Admin panel for managing product inventory
- **Responsive Design**: Optimized for desktop and mobile devices
- **Product Categories**:
  - Eau de Parfum
  - Eau de Toilette
  - Attars
  - Deodorants
  - Designer Collections
  - Miniatures
  - Combo Packs

## 🛠️ Tech Stack

**Frontend:**
- HTML5, CSS3, JavaScript
- Font Awesome Icons
- Google Fonts (Inter)

**Backend:**
- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)

**Database:**
- MongoDB
- Mongoose ODM

**Authentication & Security:**
- bcrypt/bcryptjs for password hashing
- express-session for session management

**File Upload:**
- Multer for handling image uploads

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- MongoDB installed and running
- npm or yarn package manager

## ⚙️ Installation

1. Clone the repository:
```bash
git clone https://github.com/anubhavJhanwar/Essence-Elixir.git
cd Essence-Elixir
```

2. Install dependencies:
```bash
npm install
```

3. Configure MongoDB connection:
   - Update the database connection string in `connectdb/connect.js`

4. Create required directories:
```bash
mkdir uploads
```

5. Start the server:
```bash
node express.js
```

Or use nodemon for development:
```bash
nodemon express.js
```

6. Open your browser and navigate to:
```
http://localhost:5000
```

## 📁 Project Structure

```
Essence-Elixir/
├── assets/              # Images and static assets
├── connectdb/           # Database configuration
├── models/              # Mongoose models (User, Perfume)
├── pages/               # HTML pages
├── public/              # Public static files
├── routes/              # Express routes
├── uploads/             # Uploaded product images
├── views/               # EJS templates
├── express.js           # Main server file
├── main.json            # Product data
└── package.json         # Project dependencies
```

## 🔑 Key Models

**User Model:**
- Username
- Email
- Password (hashed)

**Perfume Model:**
- Name
- Discounted Price
- Actual Price
- Image
- Category
- Rating & Reviews

## 🌐 Available Routes

- `/` - Home page
- `/retailer` - Retailer login
- `/retailershop` - Product management dashboard
- `/add-perfume` - Add new products (POST)
- `/pages/*` - Various category pages

## 👨‍💻 Author

**Anubhav Jhanwar**
- GitHub: [@anubhavJhanwar](https://github.com/anubhavJhanwar)

## 📝 License

This project is licensed under the ISC License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📧 Contact

For any queries or support, please reach out through GitHub.

---

**Note:** This is an educational/portfolio project. For production use, ensure proper security measures, environment variables, and error handling are implemented.
