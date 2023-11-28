let http = require('http')
let fs=require('fs')




// const http = require('node:http');

const server = http.createServer();


server.on('request', (request, res) => {
  // // res.writeHead(200, { 'Content-Type': 'application/json' });
  // res.end(JSON.stringify({
  //   data: 'Hello World!!!!!!!!!!!!!',
  // }));

  fs.readFile('test2.txt',(error,file)=>{
  if(error){
    console.log(error)
  }
  console.log(file);
});
});

server.listen(3000);