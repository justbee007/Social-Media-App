import { json, request, response } from 'express';
import * as postService from '../Services/Post.js';
import {Post} from '../Models/Post.js';


//setting up response data
const setSuccessResponse = (data, response) => {
    response.status(200);
   
    response.json(data);
}

//Create Post response status
const setnewPostResponse = (data, response) => {
    response.status(200);
   
    response.json({message:"New Post is created it"});
}
// error handling function
const errorHandler = (message, response) => {
    response.status(500);
    response.json({ error: message });
}
// save new post 
/**
 * updatePost function is used for Editing the posts by that particular user
 * @param {*} request user post data
 * @param {*} response sucessfull registration
 */
export const save = async (request, response) =>{
    //adding new field heading
    try{
        let post = new Post({
            userId: request.body.userId,
            description: request.body.description,
            image: request.body.image,
            yums: request.body.yums,
            createdDate: request.body.createdDate,
            heading: request.body.heading
        });
        //calling postservice to post 
        const newPost = postService.create(post);
        setnewPostResponse(newPost, response);
     }
     //catching error
     catch(e){
        errorHandler(e.message, response);
    }

};
/**
 * updatePost function is used for Editing the posts by that particular user
 * @param {*} request user input data
 * @param {*} response user posts
 */

        // get post from postservice
export const getPost = async (request, response) =>{

    try{
        const {userId} = request.body;      
        const userData =await postService.getUser(request.body);  
        setSuccessResponse(userData,response);       
        }catch (e){        
        errorHandler(e.message,response);        
        }
}
/**
 * updatePost function is used for Editing the posts by that particular user
 * @param {*} request user input data
 * @param {*} response user posts
 */

//API to update the post
//adding yumms and editing description
//not implemented in fronend yet
export const updatePost = async (request, response) =>{
    try{
    
    const post = await Post.findById(request.params.id);
    
    if(post.userId === request.body.userId){
    await Post.updateOne({ $set: request.body});
    response.status(200).json("You post is updated Sucessfully");
    }else{
    response.status(403).json("you can update only your post");
    }
    
    }catch(err){
    
    response.status(500).json(err)
    
    }
    
    }

    //get all post

    /**
 * updatePost function is used for Editing the posts by that particular user
 * @param {*} request get method
 * @param {*} response all user post
 */
//timeline results in frontend
    export const getallposts = async (request,response) =>{
        try{
            const getall = await postService.search();
            setSuccessResponse(getall, response);      
   
        }catch(err){
            response.status(500).json(err);
        }


    }
    
