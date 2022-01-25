import express from 'express';

import  Mongoose  from 'mongoose';

import cookieParser from 'cookie-parser';

import routes from './Routes/Index.js';

import models from './Models/Index.js';

import cors from 'cors';

import multer from 'multer';

import path from 'path';

//added to resove __dir issues
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

import { dirname } from 'path';
const app = express();




//connecting to Mangoose database cluster
Mongoose.connect('mongodb+srv://dart:dart@cluster0.11bgn.mongodb.net/test');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//images endpoint to get user profile image from the directory
app.use("/images/user", express.static(path.join(__dirname, "images/user")));

// /images endpoint to fetch post images from the directory
//app.use("/images", express.static(path.join("/Users/rahuludhayakumar/Documents/final-project-dart/api/Api", "public/images")));
app.use("/images", express.static(path.join(__dirname, "images")));
let fileDateName='';

//storage to access diskstorage
const storage = multer.diskStorage({
    destination:(request,file,cb) => {
    cb(null,'Api/images')   
    },
     filename: (request, file ,cb) => {
    //getting date time now fucntion to implement multer
    fileDateName = Date.now()
    //concating the filename with the url
    fileDateName = fileDateName + path.extname(file.originalname);
    cb(null, fileDateName)   
    } 
    })
    //multer to store profile picture
    const upload = multer({storage : storage})
    app.post("/uploads",upload.any("image"),(request,response) => {
    response.send(fileDateName)
    })
    //accessing disk storage to save profile photo
    const store = multer.diskStorage({
        destination:(request,file,cb) => { 
        cb(null,'Api/images/user')
        },
        filename: (request, file ,cb) => {
        //getting date time 
        fileDateName = Date.now()
        //replacing the image name with time
        fileDateName = fileDateName + path.extname(file.originalname);
        cb(null, fileDateName)
        }
        })

        // saving profile picture and return the post
        const uploaded= multer({storage : store})  
        app.post("/uploads/user",uploaded.any("image"),(request,response) => {
        response.send(fileDateName) 
        })

routes(app);

export default app;