var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    if(req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.write('Hey you can go /welcome and /contact')
        res.end();
    }

    else if(req.url == '/contact') {
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.write(JSON.stringify({
            phone: '18602100000', 
                email: 'guestcaredominos@jublfood.com' 
        }));
        res.end();
    }

     else if(req.url == '/welcome') {
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.write('Welcome to Dominos!')
        res.end();
    }

    else {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.write('Error 404!, Page not found')
        res.end()
    }
}

httpServer.listen(8081, () => console.log('server start'))
module.exports = httpServer;