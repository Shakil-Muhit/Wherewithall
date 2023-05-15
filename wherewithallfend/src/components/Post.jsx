import React, { useEffect, useState } from 'react'
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
    const[userComment, setComment] = useState("")
    const [name, SetName] = useState("")

    useEffect(() => {
        fetch("/api/users/getusername?" + "id=" + props.author).then((response) => {
            console.log(response.status)
            return response.json()}).then((data) => {
                SetName(data.name)
            })
            console.log(props.author)
    })

    const makeComment = () => {
        const postComment = {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
  
        body: JSON.stringify({
          body: userComment,
          post_id: props.id,
        })
      };
  
      fetch("api/posts/addcomment", postComment).then((response) => response.json()).then((data) => console.log(data));
    }
    
    if(name.length > 0)
    {
    return (
    <div className='postLayout'>
        <div class = "card rounded">
            <div class = "card-header border-0" style = {{marginTop : "15px",fontWeight:"bold", backgroundColor: "white"}}>
                <div style={{float : "left"}}>
                    <a href = "" className='usernameLayout'>{name}</a>
                </div>
                
                <div style = {{float: "right", marginRight: "0px"}}>
                    <Button>
                        <PostPopUp pid = {props.id} author = {props.author}/>
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
                    <Button onClick={() => {console.log("Pressed");navigate("/comments", {state:{id:props.id}})}}>
                        <BiCommentDetail size= {20}/>
                    </Button>
                </div>
            </div>

            <div class = "card-footer postFooterLayout">
                    <div style={{float: "left", width : "800px"}}>
                        <TextField id="post-comment-text-field" label="Comment" variant="outlined" fullWidth onChange={e => setComment(e.target.value)}/>
                    </div>
                    
                    <div style = {{float: "right"}}>
                        <Button onClick={makeComment}>
                            <BsReplyFill size = {35}/>
                        </Button>
                    </div>
            </div>
        </div>
        
    </div>
  )
}
}
