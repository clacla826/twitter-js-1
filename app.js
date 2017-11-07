
const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const app = express();
const routes = require('./routes');

nunjucks.configure('views', {noCache: true});

app.set('view engine', 'html');
app.engine('html', nunjucks.render)



app.use(function(req, resp, next){
        console.log("\n hi this is the path requested: ", req.path, "this is the method: ", req.method);
        next();
})


app.use('/', routes);








app.listen(3000, function(){console.log("\n server listening")})















// var locals = {
//     title: 'An Example',
//     subtitle: 'Claudia',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };




// app.get('/', function(req, res, next){
//     res.render('index.html', locals, function(err, html){
//         res.send(html);
//     })

//     //res.send("Hey There")

// })

// app.get('/news', function(req, res, next){
//     res.send("It's all fake news")
// })

// app.get('/sara', function(req, res, next){
//     res.send("Hey I'm sara")
// })

// app.get('/claudia', function(req, res, next){
//     res.send("Hey I'm Claudia")
// })

// nunjucks.render('index.html', locals, function (err, output) {
//     console.log(output);
// });

// nunjucks.render('index.html', locals, function (err, output) {
//     console.log(output);
// });
// app.get('/', function(req, res, next){
//     res.render('index.html', locals, function(err, html){
//         res.send(html);
//     })

//     //res.send("Hey There")

// })
