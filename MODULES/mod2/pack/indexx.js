import mysql from 'mysql'
import http from 'http'


// var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Anu@2311',
  database : 'world'
});
 


const server = http.createServer();

server.on('request', (request, res) => {
    

    connection.query('select * from city limit 10;', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        //  data =results.forEach(element => {
        //         data +=population
        //  });
        res.end(results);
      });
    
  });
  
  server.listen(3000);



