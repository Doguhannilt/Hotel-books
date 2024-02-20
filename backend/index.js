// Requirements
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRoutes = require( './src/routes/Users')
const authRoutes = require('./src/routes/auth')
const PORT = process.env.PORT || 5000
const cookieParser = require("cookie-parser")

dotenv.config();

// MONGODB CONNECTION
mongoose.connect(process.env.MONGODB_CONNECTION)
.then(() => {
    console.log('MongoDB Connected');
})
.catch((error) => {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
});

// Express configuration
const app = express();
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials:true,
}));

app.use("/auth", authRoutes)
app.use("/users", userRoutes)

// Listen config
app.listen(7000, () => {
    console.log(`Server started on port 7000`);
});
 