import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Home from './Home'


const MyCharacters = props => {
  const characterCards = props.characters.length > 0 ?
  props.characters.map(c => (
    <p key={c.id}><Link to={`/mycharacters/${c.id}`}>{c.attributes.title}</Link></p>)) : 
    <Home /> 

  return characterCards
}

const mapStateToProps = state => {
  return {
    characters: state.myCharacters
  }
}

export default connect(mapStateToProps)(MyCharacters)