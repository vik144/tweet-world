var mongoose = require('mongoose');


var tweetSchema = mongoose.Schema({
	title: String,
	content: String,
	published: String
})

var Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
