
const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const app = express();


app.set('view engine', 'html');
app.engine('html', nunjucks.render)
nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', locals, function (err, output) {
//     console.log(output);
// });


app.use(function(req, resp, next){
    console.log("\n hi this is the path requested: ", req.path, "this is the method: ", req.method)
    next();
})

app.use('/', routes);

app.listen(3000, function(){console.log("\n server listening")})
