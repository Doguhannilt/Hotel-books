const express = require('express');
const UserModel = require('../models/model');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

const router = express.Router();

router.post("/register",[
    // ! It will check if parameters exists, they're not, the message will shows up
    check("firstName", "First Name is required").isString(),
    check("lastName", "Last Name is required").isString(),
    check("email", "Email is required").isEmail(),
    check("password", "Password with 6 or more characters required").isLength({min:6})
], async (req, res) => {

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({message:errors.array()})
    }

    try {
        const user = await UserModel.findOne({
            email: req.body.email,
        });
           

        if (user) {
            return res.status(400).json({ message: "User Already Exists" });
        }

        const newUser = new UserModel(req.body);
        await newUser.save();
        
        // After registration is accomplished, token will be created
        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET_KEY);
        
        
        // Token will be sent to the user
        res.cookie("auth_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 86400000
        });

        // Success and sending a message about it
        return res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Something went wrong :(" });
    }
});

module.exports = router;
