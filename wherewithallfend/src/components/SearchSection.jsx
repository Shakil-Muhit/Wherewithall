import React, { useState } from 'react'
import Post from './Post'
import {Tab, Tabs } from '@mui/material'
import Box from '@mui/material'
import SearchTabs from './SearchTabs'
import { useLocation} from 'react-router-dom'
import { useEffect } from 'react'
import { Button } from '@mui/material'
export default function SearchSection() {
  const location = useLocation()
  const [profile, setProfile] = useState(null)
  useEffect(() => {
    console.log("abiaudaihd")
    fetch("/api/users/getuser?" + "username=" + location.state.text).then((response) => {
      console.log(response.status)
      return response.json()}).then((data) => {
          setProfile(data)
          // console.log(allposts)
      })
}, [])

  if(profile != null)
  {
  return (
    <div className='layout'>
      
      <div className='followingLayout'>
        <div class = "card rounded">
            <div class = "card-header border-0 bg-dark text-white">
              <text style = {{marginLeft: "95px"}}>Following</text>
            </div>

            <div class = "card-body">
              <div className='tag'>
                <a href = "/profile" className='followingPeopleLayout'>doraemon</a>
              </div>
              
              <div className='tag'>
              <a href = "/profile" className='followingPeopleLayout'>doraemon</a>
              </div>

              <div className='tag'>
              <a href = "/profile" className='followingPeopleLayout'>doraemon</a>
              </div>

              <div className='tag'>
              <a href = "/profile" className='followingPeopleLayout'>doraemon</a>
              </div>

              <div className='tag'>
              <a href = "/profile" className='followingPeopleLayout'>doraemon</a>
              </div>

            </div>
        </div>
      </div>
      
      
      
      <div className='feedLayout'>
            <SearchTabs profile = {profile} name = {location.state.text}/>  
      </div>
      <div className='trendingTagsLayout'>
        <div class = "card rounded">
          <div class = "card-header border-0 bg-dark text-white">
            <text style = {{marginLeft: "80px"}}>Trending Tags</text>
          </div>

          <div class = "card-body">
            <div className='tag'>
              <button class="btn default">Farming</button>
            </div>
            
            <div className='tag'>
              <button class="btn default">industry</button>
            </div>

            <div className='tag'>
              <button class="btn default">Vehicles</button>
            </div>

            <div className='tag'>
              <button class="btn default">Apple</button>
            </div>

            <div className='tag'>
              <button class="btn default">Bitcoin</button>
            </div>

          </div>

        </div>
      </div>

      <div className='topContributorsLayout'>
        <div class = "card rounded">
            <div class = "card-header border-0 bg-dark text-white">
              <text style = {{marginLeft: "80px"}}>Top Contibutors</text>
            </div>

            <div class = "card-body">
              <div className='tag'>
                <a href = "/profile" className='usernameLayout'>John</a>
              </div>
              
              <div className='tag'>
              <a href = "/profile" className='usernameLayout'>Cena</a>
              </div>

              <div className='tag'>
              <a href = "/profile" className='usernameLayout'>Undertaker</a>
              </div>

              <div className='tag'>
              <a href = "/profile" className='usernameLayout'>Triple H</a>
              </div>

              <div className='tag'>
              <a href = "/profile" className='usernameLayout'>Shawn</a>
              </div>

            </div>

        </div>
      </div>
    </div>
  )
}
}
