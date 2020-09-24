import React from 'react'
import '../styles/home.css'
import {Link} from 'react-router-dom'

const Home = () => {
  
    return (
      <div>
        <h1>Welcome to the D3 Playr Companion</h1>
        <br />
        <h5><span id="welcome">This app is designed for avid players of Diablo 3.
        Keep track of your characters and their set builds. 
        You can also keep track of drops you may need with the Farming List.</span></h5>
        <h4>To Begin: <Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link></h4>
      </div>
    )
  }


export default Home