var express = require('express');
var app = express();

app.get('/one', function (req, res) {
    res.send('1');
});

app.get('/two', function (req, res) {
    res.send('2');
});

module.exports = app;
