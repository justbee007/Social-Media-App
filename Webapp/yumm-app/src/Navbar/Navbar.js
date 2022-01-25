import React from "react";
import { Alert } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Signup } from "../SignupLogin/Signup";

//Navigation bar before logging in

export class Navbar extends React.Component{

    constructor(props){
        super(props);
        this.state ={
          showlogin: true,
          showsignup: false
        }
      }
 //rendering the nave bar..
 // this navbar is displayed before logged in
render(){
    return (
        <div>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: '#ad6144',opacity:"0.9" }}>
          <Toolbar>
            {/* app icon button  */}
            <IconButton
              size="large"
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="15" component="div" sx={{ flexGrow: 1 }}>
              YUMM
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      </div>
    );
}












}