import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import './Signup.scss';
import Grid from "@material-ui/core/Grid";
import { Alert, Typography } from '@mui/material';
import axios from 'axios';
import { postData } from "./authorization";
import ButtonGroup from '@mui/material/ButtonGroup';
import {Navbar} from "../Navbar/Navbar";
import {Redirect} from "react-router-dom";
export class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailID: "",
            emailErrorVal: "",
            firstNameErrorVal: "",
            lastNameErrorVal: "",
            passwordErrorVal: "",
            confirmPassworderrorVal: "",
            phoneNumberErrorVal: "",
            firstName: "",
            lastName: "",
            passwordval: "",
            phoneNumber: "",
            formValid: 1,
            formval: "",
            confirmPassword: "",
            message: ""
        }
    }
    validFirstName(e) // Check whether the entered First Name is valid or not
    {   this.setState({message:""});
        this.setState({ firstName: e.target.value });
        if (e.target.value.match(/\d+/g) || e.target.value === '') {
            this.setState({ firstNameErrorVal: "The Name is not valid" });
        }
        else {
            this.setState({ firstNameErrorVal: "A name is valid" });
        }
    }
    validLastName(e) // Check whether the entered Last Name is valid or not
    {   this.setState({message:""});
        this.setState({ lastName: e.target.value });
        if (e.target.value.match(/\d+/g || e.target.value === '')) {
            this.setState({ lastNameErrorVal: "The Name is not valid" });
        }
        else {
            this.setState({ lastNameErrorVal: "The name is valid" });
        }
    }
    assignPasswordVal(e) { //Assigning Password for Insert
        this.setState({message:""});
        this.setState({ passwordval: e.target.value })
    }
    passwordMatch(e) {  // Check whether password and confirm password value is same
        this.setState({message:""});
        this.setState({ confirmPassword: e.target.value })
        if (e.target.value !== '') {
            if (e.target.value === this.state.passwordval) {

                this.setState({ confirmPassworderrorVal: "Entered Passwords Match" });
            }
            else {
                this.setState({ confirmPassworderrorVal: "Entered Passwords do not match" });
            }
        }
      
    }
    validPhoneNumber(e) // Check whether the entered Last Name is valid or not
    {   this.setState({message:""});
        this.setState({ phoneNumber: e.target.value || e.target.value === '' });

        if (e.target.value.toLowerCase().match(/^\d{10}$/)) {
            this.setState({ phoneNumberErrorVal: "The Phone number is valid" });
        }
        else {
            this.setState({ phoneNumberErrorVal: "The Phone Number is not valid" });
        }
    }
    onSubmit(e) { // Function executes on Submit
        e.preventDefault();
        const firstName = this.state.firstName.toString();
        const lastName = this.state.lastName.toString();
        const email = this.state.emailID.toString();
        const password = this.state.passwordval.toString();
        const phoneNo = this.state.phoneNumber.toString();
        const postVal = { firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.emailID, password: this.state.passwordval, phoneNo: this.state.phoneNumber}
        const myJSON = JSON.stringify(postVal);
        postData(myJSON).then(data => {   // Used to post signup Data into Database 
            this.setState({ message: data.message });
        })

        this.setState({
            emailID: '',
            emailErrorVal: '',
            firstNameErrorVal: '',
            lastNameErrorVal: '',
            passwordErrorVal: '',
            confirmPassworderrorVal: '',
            phoneNumberErrorVal: '',
            firstName: '',
            lastName: '',
            passwordval: '',
            phoneNumber: '',
            formValid: 1,
            formval: '',
            message: '',
            confirmPassword: '',
            routetosign:''
        });
    }

    validEmail(e) // Check whether the entered Emailid is valid or not
    {
        this.setState({ emailID: e.target.value });
        if (e.target.value.toLowerCase().match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) {
            this.setState({ emailErrorVal: "This is a valid email" });

        }
        else if (e.target.value === '') {
            this.setState({ emailErrorVal: "This is not a valid email" });
        }
        else {
            this.setState({ emailErrorVal: "This is not a valid email" });
        }
    }
    redirectto() {
        this.setState({routetosign:<Redirect to={{
        pathname: "/"
      }}/>})
            }
    /**
 * 
 * @returns Sign Up Component*/

    render() {
        return (
            <div className="signup">
                <Navbar></Navbar>
                <div className="signup-div">
                    <Typography variant="h3" display="block" component="div" gutterBottom align='center'>
                        Signup to Yum
                    </Typography>
                    <form className="signupform" onSubmit={this.onSubmit.bind(this)}> 
                    {/* Sign Up Form  */}
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField id="outlined-basic" value={this.state.firstName} className="signupFirstName" label="First Name" variant="outlined" onChange={this.validFirstName.bind(this)} helperText={this.state.firstNameErrorVal} />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="outlined-basic" value={this.state.lastName} className="signuplastName" label="Last Name" variant="outlined" onChange={this.validLastName.bind(this)} helperText={this.state.lastNameErrorVal} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="outlined-basic" value={this.state.emailID} className="signupemailID" label="Email Id" variant="outlined" onChange={this.validEmail.bind(this)} helperText={this.state.emailErrorVal} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="outlined-basic" value={this.state.passwordval} className="signuppasswordField" label="Password" variant="outlined" type="password" onChange={this.assignPasswordVal.bind(this)} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="outlined-basic" value={this.state.confirmPassword} className="signupconfirmpasswordField" label="Confirm_Password" variant="outlined" type="password" onChange={this.passwordMatch.bind(this)} helperText={this.state.confirmPassworderrorVal} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="outlined-basic" value={this.state.phoneNumber} className="signupphoneNumber" label="Phone Number" variant="outlined" onChange={this.validPhoneNumber.bind(this)} helperText={this.state.phoneNumberErrorVal} />
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" sx={{ mt: 3, mb: 2 }} variant="contained" color="primary">Sign Up</Button>
                            </Grid>
                        </Grid>
                    </form>
                    <Button sx={{ mt: 3, mb: 2 }} variant="contained" onClick={() =>this.redirectto()} color="primary">Sign In</Button>
                    <Typography variant="h4" display="block" component="div" gutterBottom align='center'>{this.state.message}</Typography> 
                    {/* Message after Submit */}
                    {this.state.routetosign} 
                </div>
                </div>
        )
    }
}