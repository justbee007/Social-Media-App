import { json, request, response } from 'express';
import * as signService from '../Services/Signup.js';
import Signup from '../Models/Signup.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';


// error handling function
const errorHandler = (message, response) => {
    response.status(500);
    response.json({ error: message });
}
//setting up response data
const setSuccessResponse = (data, response) => {
    response.status(200);
   
    response.json(data);
}

//get user name
/**
 * updatePost function is used for Editing the posts by that particular user
 * @param {*} request user get method
 * @param {*} response all user data
 */
export const getUserName = async (request,response) =>{
    try{    
    const userData = await signService.getusername();    
    setSuccessResponse(userData,response);    
    response.json(userData);    
    }catch(err){    
    errorHandler(e.message, response);   
    }    
    }

    //sign up---> saving data to signup database
    export const save = async (request, response) =>{
    
        try{
            const {email,password} =request.body;
            const mailcheck = await signService.findemail(request.body);
            //check if email id is present in the database
            if(mailcheck){
                //matches emailid from db with request email
           if(email === mailcheck.email){
               //sending response if email is present
                response.send({message:"Email id is already present please login"})
            }
        }
            else{
                // new signup 
                let signups = new Signup({
                    firstName: request.body.firstName,
                    lastName:request.body.lastName,
                    email: request.body.email,
                    password: request.body.password,
                    phoneNo:request.body.phoneNo
                });

                //encrypting the password and save it to database
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(signups.password, salt, (err, hash) => {
                        if (err) throw err;
                        signups.password = hash;
                        const newSignup = signService.create(signups);

                        response.status(200);
    
                        response.json({message:"New User Created"});
                    })

                })                  
            }
            //transpoter to send email using nodemailer
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false, 
                auth: {
                  user:'yapp7395@gmail.com', 
                  pass: 'dartyummy', 
                },
              });
            
    
              let info = await transporter.sendMail({
                from: '"Yumm App" <yapp7395@gmail.com>', // sender address
                to: email, // list of receivers
                subject: " Your Yumm account is created successfully", // Subject line
                text: "Your email has been successfully registered please longin to Yumm app feed your cravings", 
              });
                      
              console.log("Message sent: %s", info.messageId);
              console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
         }
         //catching error
         catch(e){
            errorHandler(e.message, response);
        }
    
    };
//get signup data by id
    export const getbyid = async (request, response) =>{
        try {    
        const id = request.params.id;       
        const sign = await signService.get(id);   //calling signin service to get user data based on id 
        setSuccessResponse(sign, response);    
        } catch (e) {    
        errorHandler(e.message, response);    
        }   
        }


    //login function
    export const login = async (request, response) =>{
    
        try{
            const {email,password} =request.body;
            //checking if email id is present in the database
            const newSignup = await signService.findemail(request.body);
                if(newSignup){
                    //decrypt the password and compare with request password
                    bcrypt.compare(password, newSignup.password, (err, data) => {
                        //if error than throw error
                        if (err) throw err
        
                        //if both match than create jwt token
                        if (data) {
                            const user = {id: 3};
                            const token = jwt.sign({user}, "my_secret_key");
                            //sending response json with jwt token
                            return response.status(200).json({ message: "Login success",email:email,id:newSignup._id,token:token})
                        } 
                        //if password is not matching then return invalid credential
                        else {
                            return response.status(401).json({ message: "Invalid credencial" })
                        }     
                    })
                            }
                            //if no data found in newsignup then newuser found
                            else{
                    response.send({message:"User not found"})
                }
         }
         //catching error block in login
         catch(e){
            errorHandler(e.message, response);
        }
    
    };