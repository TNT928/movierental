const express = require('express')
const User = require('../models/User')
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');
const router = express.Router()

// register a user
router.post('/',  [
    check('name', 'Name is required').notEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({min: 6}),
  ], async(req, res)=>{
    
})

module.exports = router