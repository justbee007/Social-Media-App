import Signup from '../Models/Signup.js';
// database call to model

//calling new signup to model
export const create = (signup) => {
    const newSignup = new Signup(signup);
    return newSignup.save();
}

//finding email present in the database
export const findemail = (params ={email}) => {
    const {email} =params.email;
    const promise = Signup.findOne({$or: [{email:params.email}]}).exec();
    return promise;
};

//finding the user present in database with id
export const get = (id) =>{
    const promise = Signup.findById(id).exec();    
    return promise;    
    }

    //finding the user data based on username
export const getusername = (params ={}) => {
    const promise = Signup.find(params).exec();        
    return promise;        
};