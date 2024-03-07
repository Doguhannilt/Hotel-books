// Requirements
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
dotenv.config();
// Cloudinary
const cloudinary = require("cloudinary")

const logger = require('./src/utils/info_logger')
const e_logger = require('./src/utils/error_logger')

try{
    logger.info('Cloudinary init')
cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})
} catch(err){
    e_logger(err)
}
// PORT
const PORT = process.env.PORT || 5000


// Directions
const logoutRoutes = require('./src/routes/Logout')
const userRoutes = require( './src/routes/Users')
const authRoutes = require('./src/routes/auth')
const myHotelRoutes = require("./src/routes/My-hotels")
const HotelRoutes = require("./src/routes/Hotels")
const viewRoutes = require("./src/routes/Views")

// MONGODB CONNECTION
mongoose.connect(process.env.MONGODB_CONNECTION)
.then(() => {
    logger.info("MongoDB Connected")
})
.catch((error) => {
    e_logger(error)
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

// Login
app.use("/auth", authRoutes)
// Register
app.use("/users", userRoutes)
// Log out
app.use("/logout", logoutRoutes);
// Hotels (With ValidateToken)
app.use("/my-hotels", myHotelRoutes)

// Hotels (All public)
app.use("/hotels", HotelRoutes)

// Views
app.use("/", viewRoutes)

{authorization: `bearer {token}`}
// Auth endpoint
app.post('/check', (req, res) => {
    const { auth_token } = req.cookies;
    try {
      // Verifying token
      const decoded = jwt.verify(auth_token, process.env.JWT_SECRET_KEY);
      // If token is ok
      return res.status(200).json({ valid: true });
    } catch (error) {
        // If token is not ok
            return res.status(401).json({ message: "Not available" });
    }
  });

// Listen config
app.listen(7000, () => {
    logger.info("Server is started in 7000")
});
 