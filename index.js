const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
// const connection = require('./dbConfig/dbConfig');
const user = require('./routes/userRoute');

const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;

// Routes
app.use('/user', user);


app.listen(PORT, () => {
    console.log(`Server is running on the port ${PORT}`);
});