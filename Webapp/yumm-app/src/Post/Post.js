import Grid from '@material-ui/core/Grid';
import axios from "axios";
import "./post.scss";
import { useContext, useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';


export default function Post({ post }) {
//pf to get images from backend
    const PF = "http://localhost:3002/images"


//rendering the post 
return (
   
    <div className="postdiv">
    <Grid container spacing={2}>
    <Grid item xs={12}>
      <Card sx={{ maxWidth: 1950 }} 
      >

 <CardMedia 
        className="postImg"  // Using Material Ui Card Media to render postss
        component="img"
        height="500"
        maxWidth="500"
        image={PF + post.image}
        alt=""
      />

<CardContent> 
<h2 className="postText">{post?.heading}</h2>  
<div><h4>Recipe</h4></div>
<div className="postText">{post?.description}</div>
</CardContent>
<CardActions disableSpacing>
        <IconButton aria-label="add to favorites" style={{color:"grey"}} className="favorite">
          <FavoriteIcon />
        </IconButton>
      </CardActions>

</Card>
</Grid>
</Grid>
</div>

)

}