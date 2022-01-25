import "./Postit.scss";
import { PermMedia } from "@material-ui/icons";
import { useContext, useRef, useState } from "react";
import axios from "axios";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Button from "@material-ui/core/Button";
import path from 'path';

export function Postit(props) {
    
    const [file, setFile] = useState("");
    let Filenamedatenow ='';
    const description = useRef();
    const heading = useRef();
    const oNSubmit = async (e) => {
        e.preventDefault();

        

        const newPost = {
            userId: props.token,
            heading: heading.current.value,
            description: description.current.value,
        };
        /**
         * 
         */

        if (file) {

            const data = new FormData();

            //const fileName = file.name;
            const fileName = "/"+Date.now() + path.extname(file.name);
            data.append("name", fileName);

            data.append("file", file);

          

            // newPost.image = fileName;

            //console.log(newPost);

            

            try {

            const res =    await axios.post("http://localhost:3002/uploads", data);


            newPost.image = "/"+res.data;
            // Filenamedatenow = res.data;

                

            } catch (err) {
                console.log("An error has appeared" + err);



            }

        }

        try {

            await axios.post("http://localhost:3002/posts", newPost);

            window.location.reload();



        } catch (err) {

            console.log(err);

        }

    }

    return (
        <form className="makeapostform" onSubmit={oNSubmit}>   {/* Make a new post from here */}
            
                <div className="recipeName"> <textarea className="recipename" placeholder={"Enter your receipe Name"} ref={heading} ></textarea> </div>
                <div className="recipedesc"> <textarea className="descInput"  placeholder={"What's your receipe for Yum!! "} ref={description}  ></textarea> </div>       
               
        <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
                
                <AddAPhotoIcon color="primary" className="shareIcon" />
                <span className="shareOptionText">Photo or Video</span>
                <input
                    style={{ display: "none" }}
                    type="file"
                    id="file"
                    accept=".png,.jpeg,.jpg"
                    onChange={(e) => setFile(e.target.files[0])}></input>
                    <p>{file.name}</p>
            </label>
        </div>
        {/* </div> */}

        {/* <button className="postBtn" type="submit">
        Yum it!!!
      </button> */}
         <div className="buttondiv"> 
         <Button className="yumbutton" type="Submit" variant="contained" color="primary">Yum It</Button></div>
       
        
    </form>

    )

}