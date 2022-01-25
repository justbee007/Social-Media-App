import { NavbarUser } from "../Navbar/NavbarUser";
import {Postit} from "../Postit/Postit";
import {render} from 'react-dom';
import {Redirect} from "react-router-dom";
import {Feed} from "../Feed/Feed";
import './HomePage.scss';

export function HomePage(props)
{ try{
    //session handling
    //login only if the session is true
if(localStorage.getItem('session')==='true')

{   
    return(
        <div className="homefeed">
<NavbarUser token= {props.location.state.idd}></NavbarUser>   {/*User NavBar */}
<Postit token= {props.location.state.idd}></Postit> {/*post it NavBar */}
<Feed> </Feed>
      {/* Post a new Post */}
</div>
);}
else{
    return(
        <Redirect to="/error"/> //redirects to error page
    )
}
} 
catch(error){
    return(
    <Redirect to="/error"/> //redirects to error page
    )
} 
}
