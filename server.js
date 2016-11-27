   var express = require('./config/express');

   var app = express();

   app.listen(3000);
   module.exports = app;

   console.log('Running...http://localhost:3000/');
