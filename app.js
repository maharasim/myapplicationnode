
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, resp) {
    if (req.url === "/") {
        fs.readFile("first.html", function (error, sample) {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(sample);
            }
             
            resp.end();
        });
    } 
});

server.listen(3000);
 
console.log('Server Started listening on 3000');