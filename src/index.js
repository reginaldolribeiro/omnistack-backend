const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb://omni:omni123@ds121455.mlab.com:21455/omnistack-reginaldolribeiro", 
    {
        useNewUrlParser: true
    }
);

app.get('/', (req, res) => {
    return res.send("<h1>Hello OmniStack</h1>");
});

app.listen(3000, () => {
    console.log("Servidor NodeJS no ar!!!");
});