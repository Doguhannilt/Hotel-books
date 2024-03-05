// Requirements
const express = require("express")
const Hotel = require("../models/hotel")
const router = express.Router()

//  locahost:7000/hotels/search
router.get("/search", async (req,res) => {
    try {
        // Note: We need to make pagination because if we have thousands hotel, we can't display all of'em
        const pageSize = 5
        // Page number
        const pageNumber = parseInt(
            req.query.page ? 
            req.query.page.toString() : 1
            )
        
        // pageNumber = 4
        const skip = (pageNumber - 1) * pageSize
        const hotelss = await Hotel.find().skip(skip).limit(pageSize)
        const hotels = await Hotel.find()
        const total = await Hotel.countDocuments()

        const response = {
            data: hotels,
            pagination:{
                total,
                page: pageNumber,
                pages: Math.ceil(total/pageSize)
            }
        }
        res.json(hotels)
    } catch (err) {
        console.log(`Error is occured in Hotels.js -> ${err}`)
        res.status(500).json({message: "Something went wrong :("})
    }
})



module.exports = router;