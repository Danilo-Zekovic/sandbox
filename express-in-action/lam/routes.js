var express = require("express")

var User = require("./models/user")

var router = express.Router()

router.use(function(req, res, next){
  res.locals.currentUser = req.User
  res.locals.errors = 
  res.locals.
})
