var mysql = require('mysql');
var pool  = mysql.createConnection({
  connectionLimit: 10,
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'searchapp'
});


module.exports.getConnection = function(callback) {
  callback(null, pool);
    /*  pool.getConnection(function(err, conn) {
       if(err) {
         return callback(err);
       }
      callback(err, conn);
   }); */
  };



  pool.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
  
   // console.log('The solution is: ', rows[0].solution);
    console.log("Database Connected");
  });