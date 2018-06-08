var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tweets');

module.exports.Tweet = require('./tweets');
module.exports.User= require('./users');

