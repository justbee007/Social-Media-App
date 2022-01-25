import {Post} from '../Models/Post.js';
 
//Creating a new Post to model
export const create = (post) => {
    const newPost = new Post(post);
    return newPost.save();
}

//getting user from model
export const getUser = (params = {userId}) => {
    const {userId} = params.userId;
    const promise = Post.find({$or: [{userId:params.userId}]}).exec();
    return promise
};

// //finding user post for specific user present in the database
export const search = (params ={}) => {
    const promise = Post.find(params).exec();
    return promise;
};

// //finding email present in the database
// export const findemail = (params ={email}) => {
//     const {email} =params.email;
//     const promise = Signup.findOne({$or: [{email:params.email}]}).exec();
//     return promise;
// };