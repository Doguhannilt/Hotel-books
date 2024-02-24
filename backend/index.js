// Requirements
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")

// Cloudinary
const cloudinary = require("cloudinary")

try{
    console.log("Cloudinary config is started")
cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})
} catch(err){
    console.log(err)
}
// PORT
const PORT = process.env.PORT || 5000


// Directions
const logoutRoutes = require('./src/routes/Logout')
const userRoutes = require( './src/routes/Users')
const authRoutes = require('./src/routes/auth')

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
app.use("/logout", logoutRoutes);

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
    console.log(`Server started on port 7000`);
});
 