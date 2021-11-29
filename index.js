const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("Usuários");
});

app.get("/delta", function(req, res){
    res.send("Jessé");

});

app.get("/gama", function(req, res){
    res.send("Jessé");

});

app.get("/beta", function(req, res){
    res.send("Jessé");

});

app.get("/alfa", function(req, res){
    res.send("09/11/2021");

});

app.get("/nome", function(req, res){
    res.send("Jessé");

});

app.listen(3000);
