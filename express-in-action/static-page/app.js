var http = require("http");
var path = require("path");
var express = require("express");
var morgan = require("morgan");
var fs = require("fs");

var app = express();

app.use(morgan("short"));

/*app.use(function(req, res, next){
  console.log("request IP: " + req.url);
  console.log("request date: " + new Date());
  next();
});*/

var staticPath = path.join(__dirname, "static")
app.use(express.static(staticPath))

/*app.use(function(req, res, next){
  var filePath = path.join(__dirname, "static", req.url);
  fs.stat(filePath, function(err, fileInfo){
    if(err){
      next();
      return;
    }
    if(fileInfo.isFile()){
      res.sendFile(filePath)
    }else{
      next()
    }
  })
})*/

app.use(function(req, res) {
  res.status(404);
  res.send("File not found!")
});

app.listen(4000, function() {
  console.log("Static pages app is running on port 4000");
});
