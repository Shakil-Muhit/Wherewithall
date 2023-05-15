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
  const[allfollowing, setAllFollowing] = useState([])

  useEffect(() => {
      console.log("abiaudaihd")
      fetch("/api/users/getcommunityposts").then((response) => {
        console.log(response.status)
        return response.json()}).then((data) => {
            setAllPosts([...allposts, data])
            // console.log(allposts)
        })

      fetch("/api/users/getcurrentuser").then((response) => {
        console.log(response.status)
        return response.json()}).then((data) => {
            setAllFollowing([...allfollowing, data.following])
            console.log(data)
        })
  }, [])

  if(allposts.length > 0 && allfollowing.length > 0)
  {
  return (
    <div className='layout'>
      
      <div className='followingLayout'>
        <div class = "card rounded">
            <div class = "card-header border-0 bg-dark text-white">
              <text style = {{marginLeft: "95px"}}>Following</text>
            </div>

            <div class = "card-body">
            {allfollowing[0].map((element) => (
              <div className='tag'>
              <a href = "" className='followingPeopleLayout'>{element}</a>
            </div>
            ))}
            </div>
        </div>
      </div>
      


      <div className='feedLayout'>
        
        <MakePost/>
        
        <div>
              {allposts[0].map((postdetails) => (
              <Post author = {postdetails.author} body = {postdetails.body} id = {postdetails.id}/>
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
