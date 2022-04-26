var express = require("express");
var bodyParser = require('body-parser');
var fs = require('fs');

 //use the application off of express.
 var app = express();

 app.use(express.static(__dirname +'/public'));
 app.use(bodyParser.urlencoded({extended: false}))
 
 //define the route for "/"
 app.get("/", function (request, response){
     //show this file when the "/" is requested
     response.sendFile(__dirname + "/public/home.html");
 });

 app.post('/view', function(req,res){ 
     const formData = JSON.stringify(req.body);
     fs.writeFileSync(__dirname + "/public/profileData.json", formData);
     res.status(200);
     res.end("Your Profile information is submitted");
 });

 app.get('/profile', function(req,res){ 
    res.sendFile(__dirname + "/public/page.html");
});


 //start the server
 app.listen(8080);
 
 console.log("Something awesome to happen at http://localhost:8080");