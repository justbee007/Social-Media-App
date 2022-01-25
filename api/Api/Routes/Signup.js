import express from "express";

import * as SignupController from '../Controller/Signup.js'

/* 
Router is the starting point of rest api. 

router routes to controller based on the method used

*/

const router = express.Router();

//URL with /signup starts here
router.route('/signup')
.post(SignupController.save);

//URL with /login Starts here
router.route('/login')
.post(SignupController.login);
//get signup data by id
router.route('/signup/:id') 
.get(SignupController.getbyid);
//get username from signup data
router.route('/getUserName')
.get(SignupController.getUserName)

export default router;