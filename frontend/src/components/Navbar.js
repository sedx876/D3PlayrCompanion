import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Users/Logout'



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
      <NavLink className="nav-link" exact activeClassName="active" to='/characters'>Characters</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" exact activeClassName="active" to='/characters/new'>New Character Build</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" exact activeClassName="active" to='/farminglist'>FarmingList</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" exact activeClassName="active" to='/farminglist/new'>New Item</NavLink>
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