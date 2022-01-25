import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import './Login.scss';
import Grid from "@material-ui/core/Grid";
import { Typography } from '@mui/material';
import { token } from "morgan";
import {Redirect} from "react-router-dom";
import { EditProfile } from "../EditProfile/EditProfile";
import {Navbar} from "../Navbar/Navbar";   
    

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            signinpassword: "" ,
            token: "",
            authorisationStatus: false,
            routeVal:'',
            message:'',
            idd:'',
            routetoSignup:''    

        }
    }
    signin(e, val) //Onsubmit function for signin
    {
        e.preventDefault();
        //alert(this.state.username);
        const url = 'http://localhost:3002/login';
        const testing = new Object();
        testing.email = this.state.username;
        testing.password = this.state.signinpassword;
        const myJSON = JSON.stringify(testing);
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'

            },
            body: myJSON
        };

        fetch(url, options)
            .then(response => response.text())
            .then(data => {
                console.log('Success:', data);
                let obj = JSON.parse(data);
                this.setState({token:obj.token});
                this.setState({message:obj.message});
                
                this.setState({idd:obj.id})
                if(obj.message== "Login success")
                { this.setState({authorisationStatus:true});
                localStorage.setItem('session','true');
                    this.setState({routeVal:<Redirect to={{
                        pathname: "/home",
                        state: { idd: obj.id }
                      }}/>})
                }

            });

           this.setState({  //setting the values to null after signin button is clicked
                emailID: '',
                username: '',
                signinpassword: ''

            });
        }
        validEmail(e) // Check whether the entered Emailid is valid or not
        {   this.setState({ username: e.target.value });
            if (e.target.value.toLowerCase().match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) {
                this.setState({ emailErrorVal: "Valid Username" });
    
            }
            else if (e.target.value === '') {
                this.setState({ emailErrorVal: "This is not a valid username" });
            }
            else {
                this.setState({ emailErrorVal: "This is not a valid username" });
            }
        }   
        
        userpassword(e, val) {//function for login password
            this.setState({ signinpassword: e.target.value });
        }
        redirectto() {
               

                this.setState({
                            routetoSignup: < Redirect to = {
                                {
                                    pathname: "/Signup",

                                }
                            }
                            />})
                        }

        /**
         * 
         * @returns signin page rendering
         */
        
        render() {
            return (
                <div className="LoginPage">
                <Navbar></Navbar>
                
                <div className="signin-div"> 
                    <Typography variant="h2" display="block" component="div" gutterBottom align='center'>
                        Login In Yum
                    </Typography>
                    <form className="signinform" onSubmit={this.signin.bind(this)} gutterBottom align='center'>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <TextField id="outlined-basic" value={this.state.username} className="signinusername" label="User Name" variant="outlined" onChange={this.validEmail.bind(this)} helperText={this.state.emailErrorVal} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="outlined-basic" value={this.state.signinpassword} className="signinpassword" label="Password" variant="outlined" type="password" onChange={this.userpassword.bind(this)} />
                            </Grid>
                            <Grid item xs={12} gutterBottom align='center' >
                                <Button type="submit" sx={{ mt: 3, mb: 2 }} variant="contained" color="primary" >Sign In</Button>
                            </Grid>
                            
                            <Grid item xs={12} gutterBottom align='center' className="signupbutton">
                                <Button sx={{ mt: 3, mb: 2 }} variant="contained" onClick={() =>this.redirectto()} color="primary">Sign Up !!</Button>
                            </Grid>
                        </Grid>
                    </form>
                    <Typography variant="h5" display="block" component="div" gutterBottom align='center'>
                        {this.state.message}

                    </Typography>

                    {this.state.routeVal}
                    {this.state.routetoSignup}
                </div>
                

                </div>
            )
        }
    
}

