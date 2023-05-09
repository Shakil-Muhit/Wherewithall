import React from 'react'
import './Profile.css'
import CommentsSection from './CommentsSection'
import 'bootstrap/dist/css/bootstrap.min.css'
import Post from './Post'

export default function Profile() {
  return (
    <div className='profileLayout'>
      
      <div>
        <div class = "Card">
            <div class = "card-title">
              Doraemon
            </div>

            <div class = "card-body">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, consequuntur vel vitae, suscipit eaque quae cum quaerat iusto corrupti cumque optio adipisci, molestiae similique tempore. Esse asperiores ullam nisi amet!</p>
            </div>
        </div>
      </div>

      <div>
        <Post/>
      </div>
    </div>
  )
}
