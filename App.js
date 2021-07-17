var http = require('http');

var server = http.createServer((req, res) => {
    console.log("Joined!");
})

server.listen(3001);