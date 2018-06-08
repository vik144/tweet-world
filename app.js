var http = require('http')
var path = require('path')
var express = require('express')
var logger = require('morgan')
var bodyParser = require('body-parser')


var app = express();

app.set('views',path.resolve(__dirname,'views'));  // set directory for views
app.set('view engine', 'ejs');


// var entries = [
// {
// 	title: 'Learning Express',
// 	content: 'building awesome stuff with express and node ',
// 	published: 'Tue Jun 05 2018 21:13:55 GMT+0530 (IST) '
// },
// {
// 	title: 'Trying out Node',
// 	content: 'Experimenting with node and NPM',
// 	published: 'Tue Jun 06 2018 23:13:55 GMT+0530 (IST) '
// },

// ]
app.locals.entries = entries;  //Makes this array available in all views

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));



//using routes
app.use(require('./routes/tweets'))

app.use(require('./routes/show-form'))

app.use(require('./routes/post-tweets'))

app.use(require('./routes/login'))

app.use(function(req,res){
	res.status(404).send('Not Found');
})



http.createServer(app).listen(3000, function(){
	console.log("Started server at localhost:3000");
})





