
var express = require('express');
var app = express();

var data = {
    targetTemperature: 20,
};

//ROUTING
app
.get('/status', function (req, res, next) {
  res.send(data);
})
.get('/targetTemperature/:temperature', function (req, res, next) { //Set Temperature
  data.currentTemperature = data.targetTemperature;
  data.targetTemperature = parseFloat(req.params.temperature);
  res.sendStatus(200);
});

var server = app.listen(4321, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Global : app listening at', host, port);
});
