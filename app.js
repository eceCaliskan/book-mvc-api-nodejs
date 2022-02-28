const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose')
const router = require('./routes/bookRoute')
const bodyParser = require('body-parser')


app.listen(5000)
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use('/books', router)




mongoose.connect(process.env.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('Connect to the mango db...') })