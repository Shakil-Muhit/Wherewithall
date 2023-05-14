import React from 'react'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom"
import { useState } from 'react';

export default function Login() {
    const nav = useNavigate();
    const [userName, setUserName] = useState("NoUsername")
    const [pass, setPass] = useState("NoPass")

    const seeAll = () =>
    {
        console.log(userName)
        console.log(pass)

        const postLoginData = {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
      
            body: JSON.stringify({
              username: userName,
              password: pass
            })
          };
      
          fetch("/api/users/login", postLoginData).then((response) => {
            console.log(response.status)
            if(response.status === 200 || response.status === 201)
            {
                return response.json()
            }
            else 
            {
                throw new Error("Something went wrong")
            }
          }).then((data) => {
            console.log(data)
            nav("/community")
        }).catch((error) => console.log(error));
    }

    return (
    <div>
    <div class="split left">
        <div>
             <h6 className='title'>WhereWithAll</h6>
             <p className='textbelowtitle'>Where Ambition meets imagination</p>
        </div>

        <div style = {{marginLeft: "350px", marginTop: "50px"}}>
             <text style = {{marginRight : "50px"}}>Not registered yet?</text>
             <button type="button" class="btn btn-primary" onClick={() => {nav("/register")}}>Register Now</button>
        </div>
    </div>

    <div class="split right">
        <div class="centered">
            {/* login form */}
            <h2 className='loginText'>Login</h2>
            <Form>
                <div class = "mb-3">
                    <label for="InputUsername" class = "form-label">Username</label>
                    <input type = "text" class="form-control" id = "InputUsername"required onChange={e => setUserName(e.target.value)}></input>
                </div>
                
                <div class="mb-3">
                    <label for="InputPassword" class="form-label">Password</label>
                    <input type="password" class="form-control" id="InputPassword" required onChange={e => setPass(e.target.value)}/>
                </div>
            
                <div class = "mb-3" style = {{marginLeft: "300px"}}>
                    <button type="button" class="btn btn-primary"  onClick={seeAll}>Login</button>
                </div>

            </Form>
            
        </div>
    </div>

</div>
)
}


