import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useState, useEffect } from 'react';

export default function PostPopUp(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget)
  };
  const handleClose = () => {
    setAnchorEl(null);
    console.log("Pressed")
  };

  const [currentUser, SetCurrentUser] = useState(null)

  const handleDelete = () => {
        if(currentUser.is_moderator === true || props.author === currentUser.user)
        {
          const postData = {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
      
            body: JSON.stringify({
              post_id : props.pid,
            })
          };
      
          fetch("/api/posts/deletepost", postData).then((response) => response.json()).then((data) => console.log(data));
        }
        }
  

  useEffect(() => {
    console.log("ppupkenu")
    console.log(props.pid + " " + props.author)
    fetch("/api/users/getcurrentuser").then((response) => {
      console.log(response.status)
      return response.json()}).then((data) => {
          SetCurrentUser(data)
          // console.log(allposts)
      })
}, [])
if(currentUser != null)
{
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <BsThreeDotsVertical size = {20}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Edit Post</MenuItem>
        <MenuItem onClick={handleDelete}>Delete Post</MenuItem>
        <MenuItem onClick={handleClose}>Report Post</MenuItem>
      </Menu>
    </div>
  );
}
}
