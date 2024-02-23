const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Logout endpoint
router.post("/", (req, res) => {
    // Reset the cookie
    try{
    res.clearCookie('auth_token');
    res.status(200).json({ message: "Logged out successfully" });}
    catch(err){
      console.log(`Logout error -> ${err}`)
    }
  });
  
  module.exports = router;