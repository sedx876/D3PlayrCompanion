import React from 'react'
import {Link} from 'react-router-dom'


const CharacterCard = ({ character }) => {



  return (
    <div className="card text-white bg-dark mb-3">
      <div className="card-header"><h3>{character.attributes.title}</h3></div>
        <div className="card-body">
          <h4 className="card-title"><span>Title:</span> {character.attributes.character_klass}</h4>
          <h5 className="card-text">Helm: {character.attributes.helm}</h5>
          <p className="card-text">Shoulders: {character.attributes.shoulders}</p>
          <p className="card-text">Gloves: {character.attributes.gloves}</p>
          <p className="card-text">Chest Armor: {character.attributes.chest_armor}</p>
          <p className="card-text">Belt: {character.attributes.belt}</p>
          <p className="card-text">Pants: {character.attributes.pants}</p>
          <p className="card-text">Boots: {character.attributes.boots}</p>
          <p className="card-text">Bracers: {character.attributes.bracers}</p>
          <p className="card-text">Amulet: {character.attributes.amulet}</p>
          <p className="card-text">Ring: {character.attributes.ring_1}</p>
          <p className="card-text">Ring: {character.attributes.ring_2}</p>
          <p className="card-text">Weapon: {character.attributes.weapon}</p>
          <p className="card-text">Offhand: {character.attributes.offhand}</p>
          <p className="card-text">Gem Notes: {character.attributes.gem_notes}</p>
          <p className="card-text">Kanai's Cube: {character.attributes.kanais_cube}</p>
          <p className="card-text">Active Skills: {character.attributes.active_skills}</p>
          <p className="card-text">Passive Skills: {character.attributes.passive_skills}</p>
          <p className="card-text">General Build Notes: {character.attributes.general_build_notes}</p>
          <Link className="btn btn-primary" to={`/characters/${character.id}/edit`}>Edit or Delete this Character</Link>
  </div>
  </div>
  
  )
}



export default CharacterCard