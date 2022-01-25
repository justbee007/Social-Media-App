import React, { useEffect, useState } from "react";
import {Postit} from "../Postit/Postit";
import axios from "axios";
import Post from "../Post/Post";
import './Feed.scss';

// post based on individual profile
export function ProfileFeed(props) {
const [posts, setPosts] = useState([]);  
const personID = props.personID;

useEffect(() =>{
    //getching the post
const fetchposts = async () => {
const response = await axios.get("http://localhost:3002/posts")
//setting the post from response data
setPosts(response.data);
};
//calling fetch post funtion
fetchposts();
},[]);


//matches the posed based on user id
return(
<div className="feed">
<div className= "feedWrapper">
{posts.map((p) => ( (p.userId==props.personID) ? 
<Post key={p._id} post={p} /> : null
))}
</div>
</div>
)
}

