const express = require('express');
const UserModel = require('../models/model');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post("/register", async (req, res) => {
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
