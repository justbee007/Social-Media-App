import express from "express";

import * as userController from '../Controller/User.js'

export const router = express.Router();
//put user to update the user data
router.route('/users/:id') 
.put(userController.putUser);


export default router;