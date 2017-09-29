//This is Option One.
var KafkaRest = require('kafka-rest');
var api_url = "http://129.146.69.162:9092";
var topicName = 'bhdata';
var consumerGroup = 'BloodhoundKafka';
var messageLimit = 1000000;
var fromBeginning = 'from-beginning';
var format = "JSON" || "avro";

if (consumerGroup === undefined) {
    consumerGroup = "console-consumer-" + Math.round(Math.random() * 100000);
}
var kafka = new KafkaRest({"url": api_url});
var consumed = 0;
var consumerConfig = {
    "format": format
};

if (fromBeginning) {
    consumerConfig['auto.offset.rest'] = 'smallest';
}
kafka.consumer(consumerGroup).join(consumerConfig, function (err, consumer_instance) {
    if (err){
          return console.log("Failed to create instance in consumer group:" + err);
      }

    console.log("Consumer Instance initialized: " + consumer_instance.toString());
    var stream = consumer_instance.subscribe(topicName);

    stream.on('data', function (messages) {
        for (var i = 0; i < messages.length; i++) {
            if (format === "binary") {
                console.log(messages[i].value.toString('utf8'));
            } else {
                console.log(JSON.stringify(messages(i).value));
                sendData(messages[i].value);
            }
        }

        consumed += messages.length;
        console.log("The program is hanging... 3");
        if (messageLimit !== undefined && consumed >= messageLimit)
            ;
        consumer_instance.shutdown(logShutdown);
    });
   
    stream.on('error', function (err) {
        console.log("Consumer instance reported an error" + err);
        console.log("Attempting to shutdown consumer instance...");
        consumer_instance.shutdown(logShutdown);
    });

    stream.on('end', function () {
        console.log("Consumer stream closed");
    });

    consumer_instance.on('end', function () {
        console.log("Attempting to shutdown consumer instance...");
        consumer_instance.shutdown(logShutdown);
    });
});

function logShutdown(err) {
    if (err) {
        console.log("Error while shutting down: " + err);
    } else {
        console.log("Shutdown cleanly.");
    }
};

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var BHDATA;

/* Option Two
 var kafka = require('kafka-node');
 var Consumer = kafka.Consumer,
 client = new kafka.Client('129.146.69.162:9092'), //Oracle Bloodhound Kafka bootstrap server address  
 consumer = new Consumer(
 client, [{topic: 'bhdata', partition: 0}], {autoCommit: false, fetchMaxWaitMs:1000, fetchMaxBytes:1024*1024}); //specify the topic and partition.
 
 consumer.on('connection', function(){ //log when a connection to the kafka server is established
 console.log('Connection to Kafka established'); 
 });
 
 consumer.on('message', function(message){
 var bhdata = JSON.parse(message.value); //get kafka message and parse to a variable
 console.log("KAFKA SAYS...");
 console.log(bhdata);
 this.BHDATA = bhdata; //assign data to a private variable so that it can be accessed elsewhere in the file.
 sendData(this.BHDATA); //pass data received from kafka to the sendData function
 });
 
 consumer.on('error', function(err){
 console.log('error', err);
 });
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("./public_html"));
app.use(cors());

function sendData(bhdata) {
    wss.broadcast(JSON.stringify(bhdata));
};

const clientPort = 4200;
var WebSocketServer = require('ws').Server;
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