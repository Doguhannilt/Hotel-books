const express = require('express');
const { check, validationResult } = require('express-validator');
const UserModel = require('../models/model');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const verifyToken  = require('../middleware/auth');


router.post("/login", [ 
    check("email", "Email is required").isEmail(),
    check("password", "Password with 6 or more characters required").isLength(
        {
    min:6})], async (req,res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).json({message: errors.array()})
        }

        // ! Take the email and password from user
        const {email , password} = req.body

        try {

            // ? We find the user based on "email"
            const user = await UserModel.findOne({
                email
            })



            // ? Checking if user exist
            if(!user) {
                return res.status(400).json({ message: "Invalid Credentials" })
            }



            // ? Is given password matching with the password in the database?
            const isMatch = await bcrypt.compare(password, UserModel.password)
            if(!isMatch) { return res.status(400).json({ message: "Invalid Credentials" }) }



            // ? HTTP cookie
            const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET_KEY, {
                expiresIn: "1d"
            })
            res.cookie("auth_token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                maxAge: 86400000
            })
            res.status(200).json({userId: UserModel._id})


        } catch (err) {
            console.log(err)
            res.status(500).json({message: "Something went wrong :("})
        }

    })

    router.get("/validate-token", verifyToken, (req, res) => {
        res.status(200).send({userId: req.userId})
    })

module.exports = router;