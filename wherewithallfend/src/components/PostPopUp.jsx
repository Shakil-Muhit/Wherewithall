import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useState } from 'react';

export default function PostPopUp() {
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
        <MenuItem onClick={handleClose}>Delete Post</MenuItem>
        <MenuItem onClick={handleClose}>Report Post</MenuItem>
      </Menu>
    </div>
  );
}
