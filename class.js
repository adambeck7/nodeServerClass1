const http = require('http');
const PORT = 7000;
const PORT2 = 7500;

function handleRequests(req, res) {
    res.end(":) " + req.url);
}

function handleRequests2(req, res) {
    res.end(":( " + req.url);
}

var server = http.createServer(handleRequests);
var server2 = http.createServer(handleRequests2);

server.listen(PORT, function () {
    console.log(' :) port: ' + PORT);
})
server2.listen(PORT2, function () {
    console.log(' :( port: ' + PORT2);
})