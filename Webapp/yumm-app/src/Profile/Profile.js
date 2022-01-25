import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Typography } from '@mui/material';
import { token } from "morgan";
import {Redirect} from "react-router-dom";
import { NavbarUser } from "../Navbar/NavbarUser";
import { ProfileFeed} from "../Feed/ProfileFeed";
import './Profile.scss';

    
    

export class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            age: '',
            firstname: "",
            lastname: "",
            dob : "",
            hometown: "",
            residentstate: "",
            signinpassword: "" ,
            token: "",
            authorisationStatus: false,
            routeVal:'',
            message:'' ,
            id:''
        }
    }

    

        /**
         * 
         * @returns signin page rendering
         */
        
         render() {
            try
            {
            this.state.id = this.props.location.state.idd
            if(localStorage.getItem('session')==='true') // Handling Routing and Session Handling
            {
               
                return (
                    <div className="userprofile">
                    <NavbarUser></NavbarUser> 
                        <div className="myprofile-div"> 
                            <Typography variant="h3" display="block" component="div" gutterBottom align='center'>
                                My profile
                            </Typography>
                            <ProfileFeed personID={this.state.id} />
    
                            {this.state.routeVal}
                        </div>
                        </div>
                   
                )
        }
        else 
        {
            return ( <Redirect to="/error"/>)
        }
    }
    catch(error)
    {
        return ( <Redirect to="/error"/>)  
    }
        }
    
}

