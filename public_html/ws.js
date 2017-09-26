var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var BHDATA;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("./public_html"));
app.use(cors());


app.post('/bhdata', function (request, response, next) {
    console.log("Data received");
    var bhdata = request.body;
    this.BHDATA = bhdata;
    //console.log(bhdata);
    response.send("OK");
    
    sendData(this.BHDATA);
    next();
});

function sendData(bhdata) {
    wss.broadcast(JSON.stringify(bhdata));
};

const StreamAPort = 4201;
app.listen(StreamAPort);
console.log("Server is listening to port 4201");

const clientPort = 4200;
WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: clientPort});

wss.on("connection", function (ws) {
    ws.send("Welcome to the Bloodhound Dashboard");
    console.log("Client Connected");
});

wss.broadcast = function (bhdata) {
    wss.clients.forEach(function (client) {
        client.send(bhdata);
        console.log("Data sent");
    });
};