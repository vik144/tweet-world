var express = require('express')
var router = express.Router()
var db = require('../models/index')
var tweet = db.Tweet;


router.post('/new-entry', function(req,res){
	if(!req.body.title || !req.body.content){
		res.status(400).send('Entries should have titles and content');
	}
		var tweets = new tweet({
		title: req.body.title,
		content: req.body.content,
		published: new Date()
	});
	tweets.save(function(err,data){
	if(err){
		return console.log(err)
	}else{
		console.log(data)
	}
})


})


module.exports = router