import { json, request, response } from 'express';

import User from '../Models/Signup.js';



/**
 * updatePost function is used for Editing the posts by that particular user
 * @param {*} request put user req body
 * @param {*} response updated response
 */
export const putUser = async (request, response) =>{

  let user = new User({
    firstName: request.body.firstName,
    lastName:request.body.lastName,
    password: request.body.password,
    phoneNo:request.body.phoneNo,
    profilePicture:request.body.profilePicture,
    followers: request.body.followers,
    followings: request.body.followings,
    desc: request.body.desc,
    city: request.body.city
});
  if (request.body.password) 
   delete request.body.password
    try {
                    ////find and update by id
                    const putuser = await User.findByIdAndUpdate(request.params.id, {
                      $set: request.body,
                    });
                    //response message
                    response.status(200).json("Account has been updated");                   
  }
  catch(err){
    return response.status(500).json(err);
  }


}
