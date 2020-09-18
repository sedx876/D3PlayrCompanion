import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



const MyCharacters = props => {
  const characterCards = props.characters.length > 0 ?
  props.characters.map(c => (
    <p key={c.id}><Link to={`/characters/${c.id}`}>{c.attributes.title}</Link></p>)) : 
    null

  return characterCards
}

const mapStateToProps = state => {
  return {
    characters: state.myCharacters
  }
}

export default connect(mapStateToProps)(MyCharacters)