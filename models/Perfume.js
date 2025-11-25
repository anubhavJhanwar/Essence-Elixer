const mongoose = require('mongoose');

const perfumeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    discountedPrice: { type: Number, required: true },
    actualPrice: { type: Number, required: true },
    image: { type: String, required: true }, // Path to the uploaded image
});

const Perfume = mongoose.model('Perfume', perfumeSchema);
module.exports = Perfume;
