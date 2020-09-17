import React, { Component } from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  
    return (
      <div>
        <h1>Welcome to the D3 Playr Companion</h1>
        <Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link>
      </div>
    )
  }


export default Home