const express = require('express');
const app = express();

app.get('/', function(req, res, next){
    res.send("Hey There")
})



app.listen(3000, function(){console.log("\n server listening")})