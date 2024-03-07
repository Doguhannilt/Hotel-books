const express = require("express")
const router = express.Router()
const multer = require("multer")

// ? Model
const Hotel = require("../models/hotel")

// ? Verify Token
const verifyToken = require("../middleware/auth")

const {e_logger} = require('../utils/error_logger')


router.get("/views/:id", verifyToken, async (req, res) => {
    const hotelId = req.params.id;
    try {
      const hotel = await Hotel.findOne({ _id: req.params.id });
      res.json(hotel);
    } catch (err) {
        e_logger.error(`view GET error is occured -> ${err}`)
      res.status(500).json({ message: "Error fetching hotel" });
    }
  });
  
module.exports = router;