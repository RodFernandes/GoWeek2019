const express = require('express');
const mongoose = require('mongoose');

const app = express();

//mLab.com
mongoose.connect('mongodb://goweek:goweek123@ds223605.mlab.com:23605/goweek-backend', {
    useNewUrlParser: true
});

app.get('/', (req, res) => {
    return res.send('Hello World Lica');
});

app.listen(3000, () => {
    console.log("Server Started on Port 3000");
});