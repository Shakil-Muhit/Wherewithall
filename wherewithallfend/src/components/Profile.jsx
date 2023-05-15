import React from 'react'
import './Profile.css'
import CommentsSection from './CommentsSection'
import 'bootstrap/dist/css/bootstrap.min.css'
import Post from './Post'
import { useEffect,useState } from 'react'

export default function Profile() {
  const [allposts, setAllPosts] = useState([])
  const arr = []
  useEffect(() => {
      console.log("abiaudaihd")
      fetch("/api/users/getcurrentuserposts").then((response) => {
        console.log(response.status)
        return response.json()}).then((data) => {
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
              <a href = "/profile" className='followingPeopleLayout'>nobita</a>
              </div>

              <div className='tag'>
              <a href = "/profile" className='followingPeopleLayout'>popeye</a>
              </div>

              <div className='tag'>
              <a href = "/profile" className='followingPeopleLayout'>tintin</a>
              </div>

              <div className='tag'>
              <a href = "/profile" className='followingPeopleLayout'>pikachu</a>
              </div>

            </div>
        </div>
      </div>
      
      
      
      <div className='feedLayout'>
          <div className='profileLayout'>
      
            <div>
              <div class = "Card">
                <div class = "card-title">
                   <h1 style={{marginLeft: "300px"}}>Doraemon</h1>
                </div>

              <div class = "card-body">
                <div style={{marginBottom: "50px",marginTop: "20px", marginRight: "10px"}}>
                  <div style={{float: "left"}}>
                     <h6 style={{fontWeight: "bold"}}>Profession: </h6>
                  </div>

                  <div style={{marginLeft: "100px"}}>
                      <h6>Robot</h6>
                  </div>
                </div>

               <div>
                  <div style={{float: "left", marginBottom: "50px"}}>
                     <h6 style={{fontWeight: "bold"}}>Investments: </h6>
                  
                    <div style={{marginTop: "20px"}}>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat neque quam possimus ab expedita quidem minus, nesciunt vel sed. Ea earum nostrum reprehenderit corrupti alias architecto magni dicta illo maiores.</p>
                    </div>

                  </div>
               </div>

              </div>
          </div>
         </div>

        <div>
          <div style={{marginBottom: "50px"}}>
            <h3>Contributions</h3>
          </div>
          {allposts[0].map((postdetails) => (
              <Post author = {postdetails.author} body = {postdetails.body} id = {postdetails.id}/>
            ))}
        </div>

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