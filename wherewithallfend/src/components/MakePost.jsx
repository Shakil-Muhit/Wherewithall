import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { TextFieldClasses,TextField } from '@mui/material'
import { BsReplyFill } from 'react-icons/bs'
import { Button } from '@mui/material'
import {CgNotes} from 'react-icons/cg'
export default function MakePost() {
  const[postText, setPostText] = useState("")
  
  const makePost = () => {
      const postData = {
      method: "POST",
      headers: {"Content-Type" : "application/json"},

      body: JSON.stringify({
        body: postText,
      })
    };

    fetch("api/posts/addpost", postData).then((response) => response.json()).then((data) => console.log(data));
  }

  return (
    <div>
      <div>
            <div class = "card rounded" style = {{marginBottom: "20px"}}>
                        <div>
                            <div style={{float: "left", width : "800px", marginLeft:"10px", marginTop: "20px", marginBottom: "20px"}}>
                                <TextField id="post-comment-text-field" label="Write a post" variant="outlined" fullWidth onChange={e => setPostText(e.target.value)}/>
                            </div>
                            
                            <div style = {{float: "right", marginTop: "20px", marginBottom: "20px"}}>
                                <Button onClick={makePost}>
                                    <CgNotes size = {35}/>
                                </Button>
                            </div>
                        </div>
            </div>
        </div>
    </div>
  )
}
