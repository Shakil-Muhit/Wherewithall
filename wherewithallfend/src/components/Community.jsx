import React from 'react'
import './Community.css'
import Post from './Post'
import 'bootstrap/dist/css/bootstrap.min.css'
import { TextFieldClasses,TextField } from '@mui/material'
import { BsReplyFill } from 'react-icons/bs'
import { Button } from '@mui/material'
import {CgNotes} from 'react-icons/cg'
import MakePost from './MakePost'
export default function Community() {
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
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        
        
        
      </div>

      <div className='trendingTagsLayout'>
        <div class = "card rounded">
          <div class = "card-header border-0 bg-dark text-white">
            <text style = {{marginLeft: "80px"}}>Trending Tags</text>
          </div>

          <div class = "card-body">
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
