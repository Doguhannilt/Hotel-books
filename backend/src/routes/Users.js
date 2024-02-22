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
        
        try {
        
            // Success and sending a message about it
            return res.status(201).json({ message: "User registered successfully" });
        } catch (error) {
           
            res.status(500).send({ message: "Something went wrong :(" });
        }
        
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Something went wrong :(" });
    }
});

module.exports = router;
