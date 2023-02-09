# CS-361-Microservice
 
Communication Protocal: zeromq on port 3000 by default

    zeromq must be set up on the client side using sock = zmq.socket("req");

    "req" sets the client side up to accept a response from the server.js file



Requests must be in the following json format:

    {
        "breed" : "saint_bernard"
    }

    The json object must be converted to a string object using JSON.stringify() before being sent using zeromq

        var stringObject = JSON.stringify(jsonObject);
        sock.send(stringObject);

    The breed "saint_bernard" can be changed but must match the string of the requested breed in the database.json file.



Responses will be in the json format:

    {
        "size" : "this will be size info",
        "life_span" : "this will be life span info",
        "health_info" : "this will be health info"
    }

    The size, life span, and health information will corelate to the breed sent in the request

    The json will be sent as a string object via zeromq

    JSON.pars() must be used to convert the information back into a json object on the client side

        var jsonResponse = JSON.parse(stringResponse);



Server.js reporting errors:

    Errors will be reported in the following json format: 

         var jsonResponse = {'Error' : 'No Data Found'};



UML Sequence: follow link below

![alt text](https://github.com/rschwende/CS-361-Microservice/blob/main/README_UML.png)

    client starts on port 3000
    server starts on port 3000

    server <- database.json : import json data

    client -> server : client binds with server

    user -> client : user indicates they want information
    client -> server : client makes request
    server <-- client : server responds to client
    user <-- client : client displays information to user


