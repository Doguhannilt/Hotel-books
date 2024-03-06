const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const logger = require('../utils/info_logger')
const e_logger = require('../utils/error_logger')

// Logout endpoint
router.post("/", (req, res) => {
    // Reset the cookie
    try{
    res.clearCookie('auth_token');
    res.status(200).json({ message: "Logged out successfully" });
    logger.info("Logout")}
    
    catch(err){
      e_logger.error(`Logout error -> ${err}`)
    }
  });
  
  module.exports = router;