import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Users/Logout'
import '../styles/Navbar.css'
import theD3 from '../images/theD3.png'
import portal from '../images/portal.png'
import dLogo from '../images/dLogo.png'
import tyr from '../images/tyr.png'
import barLogo from '../images/barLogo.png'
import dhLogo from '../images/dhLogo.png'
import monkLogo from '../images/monkLogo.png'



const Navbar = ({ currentUser, loggedIn }) => {

  return(

  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <NavLink 
      className="nav-link" 
      exact activeClassName="active" 
      to='/home'>
      <img className='theD3' alt="D3 Logo" src={theD3}/>D3PlayrCompanion</NavLink>

    <button className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarColor01" 
            aria-controls="navbarColor01" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">

      <li className="nav-item">
        <NavLink 
          className="nav-link" 
          exact activeClassName="active" 
          to='/about'>
          <img className='dLogo' alt="D3 Logo" src={dLogo}/>About</NavLink>
      </li>

      <li className="nav-item">
        <NavLink 
          className="nav-link" 
          exact activeClassName="active" 
          to='/characters'>
          <img className='tyr' alt="tyr logo" src={tyr}/>Characters</NavLink>
      </li>

      <li className="nav-item">
        <NavLink 
        className="nav-link" 
        exact activeClassName="active" 
        to='/characters/new'>
        <img className='barLogo' alt="barbarian logo" src={barLogo}/>Add New Character Build</NavLink>
      </li>

      <li className="nav-item">
        <NavLink 
          className="nav-link" 
          exact activeClassName="active" 
          to='/farminglist'>
          <img className='dhLogo' alt="dh logo" src={dhLogo}/>Farming List</NavLink>
      </li>

      <li className="nav-item">
        <NavLink 
          className="nav-link" 
          exact activeClassName="active" 
          to='/farminglist/new'>
          <img className='monkLogo' alt="monk logo" src={monkLogo}/>Add Item to Farming List</NavLink>
      </li>

      <li className="nav-item">
        <NavLink 
          className="nav-link" 
          exact activeClassName="active" 
          to='/links'>
          <img className='portal' alt="portal" src={portal}/>Diablo Links</NavLink>
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