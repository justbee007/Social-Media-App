import React, { useEffect, useState } from "react";
import {Postit} from "../Postit/Postit";
import axios from "axios";
import Post from "../Post/Post";
import './Feed.scss';

export function Feed() {
const [posts, setPosts] = useState([]);  

useEffect(() =>{
const fetchposts = async () => {
    //post contains all the posts data fetched from backend
const response = await axios.get("http://localhost:3002/posts")
//setting the post from response
setPosts(response.data);
};

fetchposts();
},[]);


//iterating the feed based on the user posts
// map will iterate the images based on posts
return(
<div className="feed">
<div className= "feedWrapper">
{posts.map((p) => (
<Post key={p._id} post={p} />
))}
</div>
</div>
)
}

