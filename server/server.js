require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const apiRoutes = require('./routes/api');
const app = express();

app.use(cors());
app.use(express.json());
app.get('/style/style.css', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../style/style.css'));
});
app.get('/js/script.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../js/script.js'));
});
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../index.html'));
});
app.use('/api', apiRoutes);
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));