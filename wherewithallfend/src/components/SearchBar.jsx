import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import { Button } from '@mui/material'
import { TextFieldClasses,TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {GoSearch} from 'react-icons/go'


export default function SearchBar() {
    const [searched, setSearched] = useState("")
    const navigate = useNavigate()

    const handleSearch = () => {
        console.log(searched)
        navigate("/search", {state:{text:searched}})
    }

    return (
    <div>
      <div style={{float: "left"}}>
        <TextField id="search-bar-text-field" label="Search" type="search" variant="standard" fullWidth onChange={e => setSearched(e.target.value)}/>
      </div>


      <div style = {{float: "right", marginTop: "20px"}}>
        <Button onClick={handleSearch}>
            <GoSearch color='white'/>
        </Button>
     </div>      
    </div>
  )
}
