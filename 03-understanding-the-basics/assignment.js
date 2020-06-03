const http = require('http');
const handleRequest = require('./assignment-routes');

const server = http.createServer(handleRequest);

server.listen(3000);
