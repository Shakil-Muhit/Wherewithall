import React, { useState } from 'react'
import './Community.css'
import Post from './Post'
import 'bootstrap/dist/css/bootstrap.min.css'
import { TextFieldClasses,TextField } from '@mui/material'
import { BsReplyFill } from 'react-icons/bs'
import { Button } from '@mui/material'
import {CgNotes} from 'react-icons/cg'
import MakePost from './MakePost'
import { useEffect } from 'react'

export default function Community() {
  const [allposts, setAllPosts] = useState([])
  const arr = []
  useEffect(() => {
      console.log("abiaudaihd")
      fetch("/api/users/getcurrentuserposts").then((response) => {
        console.log(response.status)
        return response.json()}).then((data) => {
            // for(let i = 0; i < data.length; i++)
            // {
            //   setAllPosts([...allposts, data[i]])
            //   console.log(allposts)
            // }
            setAllPosts([...allposts, data])
            console.log(allposts)
        })
  }, [])
  if(allposts.length > 0)
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
        
        <MakePost/>
        
        <div>
              {allposts[0].map((postdetails) => (
              <Post author = {postdetails.author} body = {postdetails.body}/>
            ))}
        </div>
        
        
      </div>

      <div className='trendingTagsLayout'>
        <div class = "card rounded">
          <div class = "card-header border-0 bg-dark text-white">
            <text style = {{marginLeft: "80px"}}>Trending Tags</text>
          </div>

          <div class = "card-body">
            <div className='tag'>
              <button class="btn default" onClick={() => {
                console.log("ahgwdigbaiud")
                console.log(allposts)
                console.log(allposts[0])
              }}>Tag 1</button>
            </div>
            
            <div className='tag'>
              <button class="btn default">Tag 1</button>
            </div>

            <div className='tag'>
              <button class="btn default">Tag 1</button>
            </div>

            <div className='tag'>
              <button class="btn default">Tag 1</button>
            </div>

            <div className='tag'>
              <button class="btn default">Tag 1</button>
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
                <a href = "/profile" className='usernameLayout'>doraemon</a>
              </div>
              
              <div className='tag'>
              <a href = "/profile" className='usernameLayout'>doraemon</a>
              </div>

              <div className='tag'>
              <a href = "/profile" className='usernameLayout'>doraemon</a>
              </div>

              <div className='tag'>
              <a href = "/profile" className='usernameLayout'>doraemon</a>
              </div>

              <div className='tag'>
              <a href = "/profile" className='usernameLayout'>doraemon</a>
              </div>

            </div>

        </div>
      </div>
    </div>
  )
}
}
