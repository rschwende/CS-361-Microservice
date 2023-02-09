// client.js
var zmq = require("zeromq"),
  sock = zmq.socket("req");

const jsonRequest = require('./request.json');

sock.bindSync("tcp://127.0.0.1:3000");
console.log("Client bound to port 3000");

// send request to server
sendRequest(jsonRequest);

// listening for response
sock.on("message", function(response) {

  console.log("Response Received");
  var jsonResponse = JSON.parse(response);

  console.log(jsonResponse);
});


// function that takes json object and sends to server
function sendRequest(jsonObject) {
  var stringObject = JSON.stringify(jsonObject);
  console.log("Sending Request");
  sock.send(stringObject);
}
