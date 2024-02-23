const express = require('express');
const { check, validationResult } = require('express-validator');
const UserModel = require('../models/model');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');


router.post("/login", [ 
    check("email", "Email is required").isEmail(),
    check("password", "Password with 6 or more characters required").isLength(
        {
    min:6})], async (req,res) => {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()) {
                return res.status(400).json({message: errors.array()})
            }
            console.log("Checked for email and password")
            // ! Take the email and password from user
            const {email , password} = req.body
            console.log("Take email and password from the user")
            // ? We find the user based on "email"
            const user = await UserModel.findOne({
                email
            })
            console.log("Find the email")
            // ? Checking if user exist
            if(!user) {
                return res.status(400).json({ message: "Invalid Credentials" })
            }
            console.log("User exists or not")
            // ? Is given password matching with the password in the database?
            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch) { return res.status(400).json({ message: "Invalid Credentials" }) }
            console.log("Password is matching")
            // ? HTTP cookie
            const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET_KEY, {
                expiresIn: "1d"
            })
            res.cookie("auth_token", token, {
                httpOnly: true,
                maxAge: 86400000
            })
            res.status(200).json({ userId: user._id })
        } catch (err) {
            console.log(`Something wrong with Auth -> ${err}`)
            res.status(500).json({message: "Something went wrong :("})
        }
    })


module.exports = router;