const WebSocket = require('ws');
const server = new WebSocket.Server({ port:3000 });

server.on('connection', function(client){
    console.log(client + ' has connected');

    client.on('message', function(message){
        console.log(client + ': ' + message);
        client.send(message);
    })
    
    client.on('close', function(){
        console.log(client + " has disconnected");
    })
    
})