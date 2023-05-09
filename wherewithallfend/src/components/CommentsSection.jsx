import React from 'react'
import Comment from './Comment'
import Post from './Post'
export default function CommentsSection() {
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
        <Post></Post>
        <Comment/>
        <Comment/>
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
