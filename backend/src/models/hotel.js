const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const hotelSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    adultCount: { type: Number, required: true },
    childCount: { type: Number, required: true },
    facilities: { type: Array, required: true },
    pricePerNight: { type: Number, required: true },
    starRating: { type: Number, required: true },
    imageUrls: { type: Array, required:true},
    lastUpdated: { type: Date, required: true },
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
