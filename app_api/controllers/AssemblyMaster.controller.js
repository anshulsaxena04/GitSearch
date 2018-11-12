
var mysqlLib  = require("../../mysqldb");

//GET

module.exports.login = function(req, res) {

  mysqlLib.getConnection(function(err, mclient) {
    if(err){
      console.log(err);
    }
    console.log(req.query.username);
    console.log(req.query.password);
    var sql = "SELECT * from userdetails where Username = '"+req.query.username+"' and Passwor = '"+req.query.password+"';"
    mclient.query(sql, function (err, result) {
      if (err) {
        console.log(err);
        res.sendStatus(400)
      }
      else if(result){
        res.status(200).json(result);
      }

    });
    //mclient.release();
  });
  
  }
  module.exports.gethistory = function(req, res) {

    mysqlLib.getConnection(function(err, mclient) {
      if(err){
        console.log(err);
      }
   
      var sql = "SELECT * from userhistory where UserID = '"+req.query.username+"'order by Search_On desc LIMIT 5;"
      mclient.query(sql, function (err, result) {
        if (err) {
          console.log(err);
          res.sendStatus(400)
        }
        else if(result){
          res.status(200).json(result);
        }
  
      });
      //mclient.release();
    });
    
    }
  //Add

  module.exports.addAssMas = function(req, res) {
    mysqlLib.getConnection(function(err, mclient) {
      if(err){
        console.log(err);
      }
    console.log(req.body)
      var sql =  "INSERT INTO userdetails (Username,Email_ID,Passwor) VALUES ('"+req.body.username+"','"+req.body.email+"','"+req.body.password+"');"

     
      mclient.query(sql, function (err, result) {
        console.log("Anshul :: "+result);
        console.log("ERR : "+err);
        if (err) {
          //console.log(err);
          res.sendStatus(400)
        }
        else if(result){
          res.status(200).json(result);
        }
  
      });
      
    })
   }
   
   module.exports.savehistory = function(req, res) {
    mysqlLib.getConnection(function(err, mclient) {
      if(err){
        console.log(err);
      }
    console.log(req.body)
      var sql =  "INSERT INTO userhistory (UserID,History,Search_On) VALUES ('"+req.body.UserID+"','"+req.body.History+"','"+req.body.Search_On+"');"

     
      mclient.query(sql, function (err, result) {

        if (err) {
          //console.log(err);
          res.sendStatus(400)
        }
        else if(result){
          res.status(200).json(result);
        }
  
      });
      
    })
   }