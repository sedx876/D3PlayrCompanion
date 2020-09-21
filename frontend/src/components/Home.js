import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  
    return (
      <div>
        <h1>☠Welcome to the D3 Playr Companion☠</h1>
        <br />
        <h5><span id="welcome">This app is designed for avid players of Diablo 3.</span></h5>
        <Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link>
      </div>
    )
  }


export default Home