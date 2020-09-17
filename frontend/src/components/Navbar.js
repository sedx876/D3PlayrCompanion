import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'



const Navbar = ({ currentUser, loggedIn }) => {

  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink exact activeClassName="active" to='/characters'>Characters</NavLink>
      <NavLink exact activeClassName="active" to='/characters/new'>New Character Build</NavLink>
      { loggedIn ? <><p id="loggedin">Logged in as {currentUser.attributes.username}</p><Logout/></> : null}
    </div>
  )


  
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(Navbar)