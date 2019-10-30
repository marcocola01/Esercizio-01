var express = require('express');
var app = express();

const path = require('path');

const products = require("./products.json");

var cors = require('cors'); //HTTP access control (CORS) for cross origin requests

app.use(cors()); //Setup cors


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

app.get('/api/products',function(req,res){
    console.log(products);
 res.send(products);
});