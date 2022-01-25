import React from "react";
import { Alert, TextField } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonGroup from '@mui/material/ButtonGroup';
import './NavbarUser.scss';
import { MenuList } from "@material-ui/core";
import {Redirect} from "react-router-dom";

//class component to display navbar
export class NavbarUser extends React.Component{

    constructor(props){
        super(props);
        this.state ={
          routeVal:"",
          routehome:"",
          routeprofile:""


        }
      }
      componentDidMount(){
      }

/**
 * 
 * @renders the navbar of homepage
 */
//fucntion to redirect to edit profile page
 redirectto()
 {  
   this.setState({routeVal:<Redirect to={{
    pathname: "/EditProfile",
    state: { idd: this.props.token}
  }}/>})
 }

 //function to redirect to home page
 homeClickHandler(){
  this.setState({routehome:<Redirect to={{
    pathname: "/home",
    state: { idd: this.props.token}
  }}/>})
 }

 //profile click hanler routes to profile page
 profileClickHandler()
 {
  this.setState({routeprofile:<Redirect to={{
    pathname: "/profile",
    state: { idd: this.props.token}
  }}/>})
 } 
 sample1()
 { if(localStorage.getItem('session')==='true')
 {
   localStorage.setItem('session','false');
 }
  this.setState({routetosign:<Redirect to={{
    pathname: "/"
  }}/>})
 }     
render(){
    return (
      <div className="navbaruser">
 <Box sx={{ flexGrow: 1 }}>
 <AppBar position="fixed" style={{ background: '#ad6144',opacity:"1" }}>
        <Toolbar>
         {/* <Button variant="contained" color="primary" onClick={() =>this.redirectto()}>Edit Profile</Button> */}
          <Typography variant="15" component="div" sx={{ flexGrow: 1 }}>
              YUMM
            </Typography>
            <img src="assets/home.png" height="30px" width="30px" onClick={() =>this.homeClickHandler()}  />
            
            <TextField
            //search area
        className="search"
        placeholder="Search"
          />
          {/* image source */}
         <img src="assets/profile.png" height="30px" width="30px" onClick={() =>this.profileClickHandler()} /> 
         {/* Navigates to the profile page */}
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button  color="primary" onClick={() =>this.sample1()}>Logout</Button> 
          {/* logout Button */}
        </ButtonGroup>
        

        </Toolbar>
      </AppBar>
    </Box>
     {/* session routing */}
    {this.state.routeVal}
    {this.state.routehome}
    {this.state.routeprofile}
    {this.state.routetosign}
      </div>
    );
}

} 