import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import'./Comment.css'
import {BsThreeDotsVertical, BsReplyFill} from 'react-icons/bs'
import { Button } from '@mui/material'
import { TextFieldClasses,TextField } from '@mui/material'
import { useState } from 'react'
export default function Comment() {
    const [replyToComment, setReply] = useState("NoReplyYet")
  
    return (
    <div>
        <div class = "card rounded" style = {{marginLeft: "50px"}}>
            <div class = "card-title border-0" style = {{marginTop : "15px", marginLeft: "20px",fontWeight:"bold", backgroundColor: "white"}}>
                <div style={{float : "left"}}>
                    <a href = "/profile" className='usernameLayout'>Nobita</a>
                </div>
                
                <div style = {{float: "right", marginRight: "0px"}}>
                    <Button>
                        <BsThreeDotsVertical  size= {15}/>
                    </Button>
                </div>
            </div>

            <div class = "card-body border-0">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nam maiores, est repellat quae dolorem repudiandae, voluptates natus facere modi corporis ipsam veniam eius laudantium! Quasi porro ut delectus totam!</p>
            </div>

            <div class = "card-footer postFooterLayout">
                    <div style={{float: "left", width : "750px"}}>
                        <TextField id="post-comment-text-field" label="Comment" variant="outlined" fullWidth onChange={e => setReply(e.target.value)}/>
                    </div>
                    
                    <div style = {{float: "right"}}>
                        <Button onClick={() => {console.log(replyToComment)}}>
                            <BsReplyFill size = {35}/>
                        </Button>
                    </div>
            </div>
        </div>
        {/* replies to comment*/}

        <div class = "card rounded" style= {{marginLeft : "100px", marginTop: "10px", marginBottom: "10px"}}>
          <div class = "card-title border-0" style = {{marginTop : "15px", marginLeft: "20px",fontWeight:"bold", backgroundColor: "white"}}>
                <div style={{float : "left"}}>
                    <a href = "/profile" className='usernameLayout'>Doraemon</a>
                </div>
                
                <div style = {{float: "right", marginRight: "0px"}}>
                    <Button>
                        <BsThreeDotsVertical  size= {15}/>
                    </Button>
                </div>
            </div>

            <div class = "card-body border-0">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nam maiores, est repellat quae dolorem repudiandae, voluptates natus facere modi corporis ipsam veniam eius laudantium! Quasi porro ut delectus totam!</p>
            </div>
        </div>
    </div>
  )
}
