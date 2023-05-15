import React, { useState } from 'react'
import Comment from './Comment'
import Post from './Post'
import { useLocation} from 'react-router-dom'
import { useEffect } from 'react'
export default function CommentsSection() {
  
  const location = useLocation()

  const[allComments, SetAllComments] = useState([])

  useEffect(() => {
    console.log("abiaudaihd")
    fetch("/api/posts/getpostcomments?" + "post_id=" + location.state.id).then((response) => {
      console.log(response.status)
      return response.json()}).then((data) => {
          SetAllComments([...allComments, data])
          // console.log(allposts)
      })
}, [])

if(allComments.length > 0)
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
          {allComments[0].map((postdetails) => (
              <Comment author = {postdetails.author} body = {postdetails.body} id = {postdetails.id}/>
            ))}
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