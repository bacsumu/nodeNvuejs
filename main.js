var http = require('http');
var fs = require('fs');
var app = http.createServer(function(req,response){
    var url = req.url;
    if(req.url == '/'){
        url = '/index.html';
    }
    if(req.url == '/favicon.ico'){
        return response.writeHead(404);
    }
    console.log(__dirname + url);
    
    fs.readFile(__dirname + url,(err, data) => {
        response.writeHead(200, {'Content-Type':'text/html'});

        if(err){
            return console.log(err);
        }
        response.end(data);
    });
});
app.listen(8080);