var express = require('express')
var router = express.Router()


router.get('/new-entry', function(req,res){
	res.render('new-entry')
})

module.exports = router