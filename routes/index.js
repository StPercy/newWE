var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
    res.render('index')
})

router.get('/addList', function (req, res, next) {
    res.render('addList')
})

module.exports = router
