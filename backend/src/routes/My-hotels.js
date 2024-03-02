// Requirements
const express = require("express")
const router = express.Router()
const cloudinary = require("cloudinary").v2;


/* Multer is a node.js middleware for handling multipart/form-data ,
 which is primarily used for uploading files. It is written on top of 
 busboy for maximum efficiency. 
NOTE: Multer will not process any form which is not multipart ( multipart/form-data ).  */
const multer = require("multer")

// ? Model
const Hotel = require("../models/hotel")

// ? Verify Token
const verifyToken = require("../middleware/auth")
const { body } = require("express-validator")

// We want to store any files into a memory
const storage = multer.memoryStorage()
const upload = multer({
    storage: storage,
    limit: {
        fileSize: 5 * 1024 * 1024 // 5MB
    }
})


// localhost:7000/my-hotels
router.post("/", verifyToken,[
    body("name").notEmpty().withMessage("Name is Required"),
    body("city").notEmpty().withMessage("City is Required"),
    body("country").notEmpty().withMessage("Country is Required"),
    body("description").optional().isString(), // Optional
    body("type").notEmpty().withMessage("Type is Required"),
    body("pricePerNight").notEmpty().isNumeric().withMessage("Price Per Night is Required"),
    body("facilities").notEmpty().isArray().withMessage("facilities is Required"),
    body("imageUrls").optional(),
],upload.array("imageFiles",6), async (req,res) => {
        try {
            const imageFiles = req.files 
            const newHotel = req.body
            
            // 1. Upload the images to cloudinary
            const uploadPromises = imageFiles.map(async(image) => {

                /* Base64 is an encoding algorithm that converts any characters, 
                binary data, and even images or sound files into a readable string, 
                which can be saved or transported over the network without data loss.*/
                const b64 = Buffer.from(image.buffer).toString("base64")
                let dataURI = "data:" + image.mimetype + ";base64," + b64
                const res = await cloudinary.uploader.upload(dataURI) 
                return res.url
            })
            // 2. If upload was successful, add the urls to the new hotel
            const imageUrls = await Promise.all(uploadPromises)
            newHotel.imageUrls = imageUrls
            newHotel.lastUpdated = new Date()
            newHotel.userId = req.userId

            // 3. Save the new hotel in our databse
            const hotel = new Hotel(newHotel)
            await hotel.save()
            // 4. Return a 201 status
            res.status(201).send(hotel)
        } catch (err) {
            console.log(`The error is happened in My-Hotels ${err}`)
        }
})

router.get("/", verifyToken, async(req,res) => {

    try{
    const hotels = await Hotel.find({userId: req.userId})
    res.json(hotels)

    }catch(err) {
        console.log(err) 
        res.status(500).json({message:"Error fetching hotels"})}
})

router.delete("/delete/:id", verifyToken, async (req, res) => {
    try {
      const deletedHotel = await Hotel.findOneAndDelete({ _id: req.params.id, userId: req.userId });
      if (!deletedHotel) {
        return res.status(404).json({ message: "Hotel not found" });
      }
      res.json({ message: "Hotel deleted successfully" });
    } catch (err) {
      console.error("Delete system error ->", err);
      res.status(500).json({ message: "Error deleting hotel" });
    }
  });
  

module.exports = router;