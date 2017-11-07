const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
//   res.render( 'index', { tweets: tweets } );
  res.render('index.html', locals, function(err, html){
       res.send(html);
    })
});



module.exports = router;

var locals = {
    title: 'An Example',
    subtitle: 'Claudia',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};



















// app.use(function(req, resp, next){
//     console.log("\n hi this is the path requested: ", req.path, "this is the method: ", req.method)
//     next();
// })


// app.get('/', function(req, res, next){
//     res.render('index.html', locals, function(err, html){
//         res.send(html);
//     })

//     //res.send("Hey There")

// })
