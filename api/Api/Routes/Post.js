import express from "express";
import * as PostController from '../Controller/Post.js'
export const router = express.Router();

router.route('/posts') //Save posts
.post(PostController.save)
.get(PostController.getallposts);

router.route('/userposts') //Get user Post
.post(PostController.getPost);

router.route('/posts') //Editing the posts
.put(PostController.updatePost);






