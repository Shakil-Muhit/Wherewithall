import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useNavigate} from 'react-router-dom'
import './Register.css'
import {useState} from 'react'
export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("NoName")
  const [email, setEmail] = useState("Noemail")
  const [password, setPass] = useState("Nopass")
  const [gender, setGender] = useState("NoGender")
  const [Profession, setProfession] = useState("NoProfession")
  const [investments, setInvestments] = useState("NoInvestments")
  const [masterKey, setMasterKey] = useState("NoMasterKey")

  const seeAll = () => {
    console.log(name)
    console.log(email)
    console.log(password)
    console.log(gender)
    console.log(Profession)
    console.log(investments)
    console.log(masterKey)

    //navigate("/login")
  }
  return (
    <div>
      <div class="split left">
        <div>
             <h6 className='title'>Join Us</h6>
             <p className='textbelowtitle'>Help us with your financial understanding while improving yours at the same time</p>
        </div>
      </div>
    
      <div class="split right">
          

          <div className='centered'>
            
          <h3 style = {{marginLeft:"50px", marginTop: "0px", paddingBottom: "30px"}}>Register</h3>

            <form>
              <div class = "mb-3">
                <label for="InputUsername" class = "form-label">Username</label>
                <input type = "text" class="form-control" id = "InputUsername"required onChange={e => setName(e.target.value)}></input>
              </div>

              
              <div class="mb-3">
                <label for="InputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" required onChange={e => setEmail(e.target.value)}/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>

              <div class="mb-3">
                <label for="InputPassword" class="form-label">Password</label>
                <input type="password" class="form-control" id="InputPassword" required onChange={e => setPass(e.target.value)}/>
              </div>

              <div class = "mb-3">
                <label for="InputGender" class="form-label">Gender</label>
                <select class="form-select" aria-label="Default select example" onChange={e => setGender(e.currentTarget.value)}>
                  <option selected>Select your Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div class ="mb-3">
                <label for = "InputProfession" class= "form-label">Profession</label>
                <input type= "text" class="form-control" id="InputProfession" onChange={e => setProfession(e.target.value)}></input>
              </div>

              <div class = "mb-3">
                <label for = "InputInvestments" class= "form-label">Investments</label>
                <input type= "text" class="form-control" id="InputInvestments" onChange={e => setInvestments(e.target.value)}></input>
              </div>
              
              <div class = "mb-3">
                <label for = "InputMasterKey" class= "form-label">Master Key(Only for Administrators)</label>
                <input type= "text" class="form-control" id="InputMasterKey" onChange={e => setMasterKey(e.target.value)}></input>
              </div>

              <div style = {{display : "flex",justifyContent: "space-between"}}>
                <button type="button" class="btn btn-primary" onClick={seeAll}>Submit</button>
                <button type="button" class="btn btn-primary" onClick={() => {navigate("/")}}>Go Back to Login</button>
              </div>
            </form>
          </div>
      </div>

    </div>
  )
}
