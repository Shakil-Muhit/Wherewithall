import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Post from './Post';
import { Button } from '@mui/material';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SearchTabs(props) {
  const [value, setValue] = useState(0);

  const handleFollow = () => {
    const postRegisterData = {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
  
      body: JSON.stringify({
        username: props.name,
      })
    };
  
    fetch("/api/users/followuser", postRegisterData).then((response) => response.json()).then((data) => console.log(data));
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} centered aria-label="basic tabs example">
          <Tab label="Posts" {...a11yProps(0)} />
          <Tab label="Users" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Post />
        <Post />
        <Post />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <div style = {{float : "left"}}>
              {props.name}
          </div>
        
          <div style = {{float: "right"}}>
          <Button variant="outlined" onClick = {handleFollow}>Follow</Button>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
