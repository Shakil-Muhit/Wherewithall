import Login from "./components/Login"
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import React from 'react'
import Register from './components/Register'
import NavBar from './components/NavBar'
import Community from './components/Community'
import Profile from './components/Profile'
import CommentsSection from './components/CommentsSection'



export default function App() {
  console.log(window.location)
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Login/>}></Route>
        <Route path = "/register" element = {<Register/>}/>
        <Route path = "/community" element = {<div><NavBar/><Community/></div>}/>
        <Route path = "/profile" element = {<div><NavBar/><Profile/></div>}/>
        <Route path = "/comments" element = {<div><NavBar/><CommentsSection/></div>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App/>
// );


// module.exports = {
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: false,
//       },
//     }),
//   },
//   resolver: {
//     sourceExts: ['js', 'jsx'],
//   },
// };