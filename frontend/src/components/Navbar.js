import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Users/Logout'
import '../styles/Navbar.css'



const Navbar = ({ currentUser, loggedIn }) => {

  return(

  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <NavLink className="nav-link" exact activeClassName="active" to='/home'>D3PlayrCompanion</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item">
      <NavLink className="nav-link" exact activeClassName="active" to='/about'>About</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" exact activeClassName="active" to='/characters'>Characters</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" exact activeClassName="active" to='/characters/new'>Add New Character Build</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" exact activeClassName="active" to='/farminglist'>Farming List</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" exact activeClassName="active" to='/farminglist/new'>Add Item to Farming List</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" exact activeClassName="active" to='/links'>More Diablo</NavLink>
      </li>
    </ul>
    { loggedIn ? <><p id="loggedin">Logged in as {currentUser.attributes.username}</p><Logout /></> : null}
  </div>
</nav>) 
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(Navbar)