const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect("mongodb://omni:omni123@ds121455.mlab.com:21455/omnistack-reginaldolribeiro",
    {
        useNewUrlParser: true
    }
);

// app.get('/', (req, res) => {
//     return res.send("<h1>Hello OmniStack</h1>");
// });

app.use((req, res, next) => {
    req.io = io;

    return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(3000, () => {
    console.log("Servidor NodeJS no ar!!!");
});