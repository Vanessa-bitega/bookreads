const express = require ("express");
const route = express.Router();
const controller = require('../controllers/signup.controller')

route.post( "/signup",controller.userSingup)  // Login de
route.post( "/login",controller.userLogin)  // Login de
module.exports=route;