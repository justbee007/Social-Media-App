import './App.scss';
import {Signup} from './SignupLogin/Signup';
import React from 'react';
import {Login} from './SignupLogin/Login';
import Button from "@material-ui/core/Button";
import ButtonGroup from '@mui/material/ButtonGroup';
import { Navbar } from './Navbar/Navbar';
import { NavbarUser } from './Navbar/NavbarUser';
import {  BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ReactDOM from 'react-dom';
import ErrorPage from './ErrorPage/ErrorPage';
import {HomePage} from './HomePage/HomePage';
import image from "./images/food_images_3.jpg"
import { EditProfile } from './EditProfile/EditProfile';
import {Profile} from './Profile/Profile'
function App()
{
 return(
    <div className= "app">
    {/* <div> */}
    <Router>
    <Switch>
    <Route exact path="/" component={Login}></Route>
    <Route exact path="/profile" component={Profile}></Route>
    <Route exact path="/home" render={(props) => <HomePage {...props}/>}/>
    <Route path="/EditProfile" render={(props) => <EditProfile {...props}/>}/>
    <Route exact path="/Signup" component={Signup}></Route>
    <Route path="/*" component={ErrorPage}></Route>
    </Switch>
   
     
  </Router>   
      </div>
    );
  
}

export default App;