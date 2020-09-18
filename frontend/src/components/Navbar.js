import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'



const Navbar = ({ currentUser, loggedIn }) => {

  return(

  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <NavLink className="nav-link" exact activeClassName="active" to='/home'>D3PlayrCompanion</NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
      <NavLink className="nav-link" exact activeClassName="active" to='/characters'>Characters</NavLink>
      </li>
      <li class="nav-item">
      <NavLink className="nav-link" exact activeClassName="active" to='/characters/new'>New Character Build</NavLink>
      </li>
      
    </ul>
    { loggedIn ? <><p id="loggedin">Logged in as {currentUser.attributes.username}</p><Logout /></> : null}
  </div>
</nav>)

  // return (
  //   <div className="navbar navbar-expand-lg navbar-dark bg-primary">
  //     <NavLink exact activeClassName="active" to='/characters'>Characters</NavLink>
  //     <NavLink exact activeClassName="active" to='/characters/new'>New Character Build</NavLink>
  //     { loggedIn ? <><p id="loggedin">Logged in as {currentUser.attributes.username}</p><Logout /></> : null}
  //   </div>
  // )


  
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(Navbar)