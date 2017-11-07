const express = require('express');
const nunjucks = require('nunjucks');
const app = express();


var locals = {
    title: 'An Example',
    subtitle: 'Claudia',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};


app.set('view engine', 'html');
app.engine('html', nunjucks.render)
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});



app.use(function(req, resp, next){
    console.log("\n hi this is the path requested: ", req.path, "this is the method: ", req.method)
    next();
})

// app.get('/', function(req, res, next){
//     res.render('index', function(err, html){
//         res.send(html);
//     })

//     //res.send("Hey There")

// })

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
