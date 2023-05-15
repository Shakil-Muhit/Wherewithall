import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import'./Comment.css'
import {BsThreeDotsVertical, BsReplyFill} from 'react-icons/bs'
import { Button } from '@mui/material'
import { TextFieldClasses,TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import CommentPopUp from './CommentPopUp'

export default function Comment(props) {
    const [replyToComent, setReply] = useState("")
  
    const[allReplies, SetAllReplies] = useState([])

    const [name, SetName] = useState("")
  useEffect(() => {
    console.log("abiaudaihd")
    fetch("/api/posts/getcommentreplies?" + "comment_id=" + props.id).then((response) => {
      console.log(response.status)
      return response.json()}).then((data) => {
          SetAllReplies([...allReplies, data])
          // console.log(allposts)
      })

      fetch("/api/users/getusername?" + "id=" + props.author).then((response) => {
        console.log(response.status)
        return response.json()}).then((data) => {
            SetName(data.name)
        })
        console.log(props.author)
}, [])

const handleReply = () => {

const postData = {
    method: "POST",
    headers: {"Content-Type" : "application/json"},

    body: JSON.stringify({
      comment_id: props.id,
      body: replyToComent,
    })
  };

  fetch("/api/posts/addreply", postData).then((response) => response.json()).then((data) => console.log(data));
}


if(allReplies.length > 0 && name.length > 0)
{
    return (
    <div>
        <div class = "card rounded" style = {{marginLeft: "50px"}}>
            <div class = "card-title border-0" style = {{marginTop : "15px", marginLeft: "20px",fontWeight:"bold", backgroundColor: "white"}}>
                <div style={{float : "left"}}>
                    <a href = "/profile" className='usernameLayout'>{name}</a>
                </div>
                
                <div style = {{float: "right", marginRight: "0px"}}>
                    <Button>
                        <CommentPopUp/>
                    </Button>
                </div>
            </div>

            <div class = "card-body border-0">
                <p>
                    {props.body}    
                </p>
            </div>

            <div class = "card-footer postFooterLayout">
                    <div style={{float: "left", width : "750px"}}>
                        <TextField id="post-comment-text-field" label="Comment" variant="outlined" fullWidth onChange={e => setReply(e.target.value)}/>
                    </div>
                    
                    <div style = {{float: "right"}}>
                        <Button onClick={handleReply}>
                            <BsReplyFill size = {35}/>
                        </Button>
                    </div>
            </div>
        </div>
        {/* replies to comment*/}

        
        {allReplies[0].map((postdetails) => (
                <div class = "card rounded" style= {{marginLeft : "100px", marginTop: "10px", marginBottom: "10px"}}>
                <div class = "card-title border-0" style = {{marginTop : "15px", marginLeft: "20px",fontWeight:"bold", backgroundColor: "white"}}>
                      <div style={{float : "left"}}>
                          <a href = "/profile" className='usernameLayout'>{postdetails.authorname}</a>
                      </div>
                      
                      <div style = {{float: "right", marginRight: "0px"}}>
                          <Button>
                              <CommentPopUp/>
                          </Button>
                      </div>
                  </div>
      
                  <div class = "card-body border-0">
                    {postdetails.body}
                  </div>
              </div>              
            ))}

    </div>
  )
}
}
