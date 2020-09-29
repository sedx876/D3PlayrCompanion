import React from 'react'
import '../styles/home.css'
import {Link} from 'react-router-dom'
import d3 from '../images/d3.jpg'

const Home = () => {
  
  return (
    <div>
      <h1>Welcome to the D3 Playr Companion</h1>
      <br />
      <h5 className="card text-white bg-dark"><span id="welcome">
      This app is designed for avid players of Diablo 3. Keep 
      track of your characters and their set builds. You can also 
      keep track of drops you are seeking with the Farming List.
      <img className='diablo' alt="diablo" src={d3}/>
     </span></h5>
     
      <h4 className="card text-white bg-dark">
      To Begin: <Link to="/signup">Sign Up</Link> 
      or 
      <Link to="/login">Log In</Link></h4>
    </div>
    )
  }


export default Home