var kafka = require('kafka-node');
var Consumer = kafka.Consumer,
        client = new kafka.Client('129.146.69.162:9092'), //Oracle Bloodhound Kafka bootstrap server address  
        consumer = new Consumer(
        client, [{topic: 'bhdata', partition: 0}], {autoCommit: false}); //specify the topic and partition.

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var BHDATA;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("./public_html"));
app.use(cors());

consumer.on('connection', function(){ //log when a connection to the kafka server is established
   console.log('Connection to Kafka established'); 
});

consumer.on('message', function(message){
    var bhdata = JSON.parse(message.value); //get kafka message and parse to a variable
    console.log("KAFKA SAYS...");
    console.log(bhdata);
    this.BHDATA = bhdata; //assign data to a private variable so that it can be accessed elsewhere in the file.
    sendData(this.BHDATA);
});

consumer.on('error', function(err){
    console.log('error', err);
});

function sendData(bhdata) {
    wss.broadcast(JSON.stringify(bhdata));
};

console.log("Server is listening for a kafka topic");

const clientPort = 4200; 
WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: clientPort}); //create a websocket for clients to connect to

wss.on("connection", function (ws) {
    ws.send("Welcome to the Bloodhound Dashboard");
    console.log("Client Connected");
});

wss.broadcast = function (bhdata) {
    wss.clients.forEach(function (client) { //broadcast data received from kafka to all clients connected.
        client.send(bhdata);
        console.log("Data sent");
    });
};