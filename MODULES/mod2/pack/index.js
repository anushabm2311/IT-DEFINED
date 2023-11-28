let http = require('http')
let fs=require('fs')


const server = http.createServer();


server.on('request', (request, res) => {
    res.end("file")
      });
      
      server.listen(3308);