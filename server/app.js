var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

var index = require('./routes/index.js');
app.use("/", index);

var server = app.listen(5000, function(){
  var port = server.address().port;
  console.log("Listening on port: ", port);
});
