const path = require('path');
const express = require('express');
const router = express.Router();
const Users=require('../models/user');
const usercontroller=require('../controllers/usercontroller')
router.get('/user',usercontroller.getUsers)
router.post('/adduser',usercontroller.addUser)
router.post('/user/delete/:userid',usercontroller.deleteUser)
module.exports = router;