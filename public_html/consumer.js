var kafka = require('kafka-node');
var Consumer = kafka.Consumer,
        client = new kafka.Client('129.146.69.162:9092'),
        consumer = new Consumer(
        client, [{topic: 'bhdata', partition: 0}], {autoCommit: false});

consumer.on('connection', function(){
   console.log('Connection to Kafka established'); 
});

consumer.on('message', function(message){
    var bhdata = JSON.parse(message.value);
    console.log("KAFKA SAYS");
    console.log(bhdata);
});

consumer.on('error', function(err){
    console.log('error', err);
});