import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import { Button } from '@mui/material'
import './Post.css'
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai'
import {BiCommentDetail} from 'react-icons/bi'
import {BsThreeDotsVertical, BsReplyFill} from 'react-icons/bs'
import { TextFieldClasses,TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import PostPopUp from './PostPopUp'

export default function Post(props) {
    const navigate = useNavigate();
    const[userComment, setComment] = useState("NoCommentYet")
    
    return (
    <div className='postLayout'>
        <div class = "card rounded">
            <div class = "card-header border-0" style = {{marginTop : "15px",fontWeight:"bold", backgroundColor: "white"}}>
                <div style={{float : "left"}}>
                    <a href = "/profile" className='usernameLayout'>{props.author}</a>
                </div>
                
                <div style = {{float: "right", marginRight: "0px"}}>
                    <Button>
                        <PostPopUp/>
                    </Button>
                </div>
                
            </div>

            
            <div class = "card-body">
                <p class = "card-text" style = {{fontFamily: "cursive"}}>{props.body}</p>
            </div>

            <div style={{}}>
                <div style = {{marginTop: "15px",width: "10px",marginLeft: "0px",float: "left", marginBottom: "10px"}}>
                    <Button>
                        <AiOutlineArrowUp  size= {20}/>
                    </Button>
                </div>
                
                <div style = {{marginTop: "15px",width: "10px",marginLeft: "50px", float: "left", marginBottom: "10px"}}>
                    <Button>
                        <AiOutlineArrowDown  size= {20}/>
                    </Button>
                </div>

                <div style = {{marginTop: "15px",float: "right", marginBottom: "10px"}}>
                    <Button onClick={() => {console.log("Pressed");navigate("/comments")}}>
                        <BiCommentDetail size= {20}/>
                    </Button>
                </div>
            </div>

            <div class = "card-footer postFooterLayout">
                    <div style={{float: "left", width : "800px"}}>
                        <TextField id="post-comment-text-field" label="Comment" variant="outlined" fullWidth onChange={e => setComment(e.target.value)}/>
                    </div>
                    
                    <div style = {{float: "right"}}>
                        <Button onClick={() => {console.log(userComment)}}>
                            <BsReplyFill size = {35}/>
                        </Button>
                    </div>
            </div>
        </div>
        
    </div>
  )
}
