'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res, next) {
  res.send('Server is Running\n');
});

app.get('/getMessage', function (req, res, next) {
  res.send('Hello world\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
