var express = require('express');
var app = express();

const path = require('path');


app.get('/',function(req,res){
 res.sendFile(path.join(__dirname+'/main.html'));
});

app.get('/index',function(req,res){
 res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/sitemap',function(req,res){
 res.sendFile(path.join(__dirname+'/sitemap.html'));
});

app.get('/about',function(req,res){
 res.sendFile(path.join(__dirname+'/about.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});