var express= require('express');
/* var mongoose = require('mongoose');
 */var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
var app = express();
var AssemblyMaster = require('./app_api/routes/AssemblyMaster.route');



/* var connection = mysql.createConnection({
  host     : '192.168.1.27',
  port     : '3306',
  user     : 'dev',
  password : 'root',
  database : 'distance'
}); */
/* connection.connect(); */
 
/* connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
}); */

/* var upload = multer({ dest: 'uploads/' }) */

//const route = require('./routes/route');
//var Mosquitto = require('./models/mosquitto');
/* require('./app_api/models/db');
 */
//mongoose.connect('mongodb://pFacADM:adnate%4016%2f09@35.154.237.104:27056/IOT?authSource=admin');
require('./mysqldb'); 
app.use(express.static(path.join(__dirname, 'app_client')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

//Connection with db
/* mongoose.connect('mongodb://pFacADM:adnate%4016%2f09@localhost:27056/distance_calculator?authSource=admin');
 */
 app.get('*', function(req, res) {
    res.sendfile('./dist/gitsearch2/index.html')
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


//const port = 3000;

// middleware
app.use(cors());

app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/AssemblyMasterr', AssemblyMaster);


app.get('/',(req,res)=>{
    res.send('foobar');
});
//app.get('/api/mosquitto',(req,res)=>{
  //  res.send('foobar');
//});


//app.listen(port,()=>{
  //  console.log("Server Started at port:" +port);
//});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
 err.status = 404;
  ext(err);
  res.sendFile(__dirname + '/dist/gitsearch2/index.html');
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
})

module.exports = app;
