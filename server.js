// worker.js
var zmq = require("zeromq"),
  sock = zmq.socket("rep");

const jsonDatabase = require('./database.json');

sock.connect("tcp://127.0.0.1:3000");
console.log("Server connected to port 3000");

sock.on("message", function(request) {

  console.log("Request Received");
  var jsonRequest = JSON.parse(request);
  var breed = jsonRequest["breed"];

  if (jsonDatabase.hasOwnProperty(breed)) {

    console.log("Data found");
    var jsonResponse = jsonDatabase[breed];
    var stringResponse = JSON.stringify(jsonResponse);
    console.log("Sending Response");
    sock.send(stringResponse);

  } else {

    console.log("No data found");
    var jsonResponse = {'Error' : 'No Data Found'};
    var stringResponse = JSON.stringify(jsonResponse);
    console.log("Sending Response");
    sock.send(stringResponse);

  }








  
});