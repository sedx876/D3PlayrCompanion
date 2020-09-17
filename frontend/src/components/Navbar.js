import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'
import Login from './Login'
import {Route, Switch} from 'react-router-dom'


const Navbar = ({ currentUser, loggedIn }) => {


  return (
    <div className="Navbar navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink exact activeClassName='active' to="/">D3PlayrCompanion</NavLink>
      {/* <NavLink exact activeClassName='active' to="/login">Login</NavLink>
      <NavLink exact activeClassName='active' to="/signup">Signup</NavLink> */}
      {/* <NavLink exact activeClassName='active' to="/myCharacters">Characters</NavLink> */}
      { loggedIn ? 
      <>
      <NavLink exact activeClassName='active' to="/myCharacters">Characters</NavLink>
      <p id="loggedin">Logged in as {currentUser.attributes.username}</p>
      <Logout/>
      </> : <>
      {/* <Route exact path='/login' component={Login}> */}
      <NavLink exact activeClassName='active' to="/login" >
      Login
      </NavLink>
      {/* </Route> */}
      <NavLink exact activeClassName='active' to="/signup">Signup</NavLink></> }
      
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