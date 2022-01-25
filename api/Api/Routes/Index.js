import SignupRouter from  './Signup.js';
import {router} from './Post.js';
import userRouter from './User.js'
export default (app) =>{

    //routes to user router to update user data
    app.use('/',userRouter)
    // routes to signuprouter to handle login and signup
    app.use('/',SignupRouter);
    app.use('/', router);
    
};