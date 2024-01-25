// Requirements
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Test Method
app.get('/api/set/test', async (req, res) => {
    console.log('test');
    res.send('Test endpoint');
});


// Listen config
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
