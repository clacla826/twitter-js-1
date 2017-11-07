const express = require('express');
const app = express();

app.use(function(req, resp, next){
    console.log("\n hi this is the path requested: ", req.path, "this is the method: ", req.method)
    next();
})

app.get('/', function(req, res, next){
    res.send("Hey There")
})

app.get('/news', function(req, res, next){
    res.send("It's all fake news")
})

app.get('/sara', function(req, res, next){
    res.send("Hey I'm sara")
})

app.get('/claudia', function(req, res, next){
    res.send("Hey I'm Claudia")
})


app.listen(3000, function(){console.log("\n server listening")})