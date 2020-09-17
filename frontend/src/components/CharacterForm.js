import React from 'react'
import { connect } from 'react-redux'

const CharacterForm = ({ formData, userId }) => {

  const { title, characterKlass, helm, shoulders, gloves, 
          chestArmor, belt, pants, boots, bracers, amulet, 
          ring1, ring2, weapon, offhand, gemNotes, kanaisCube, 
          activeSkills, passiveSkills, generalBuildNotes } = formData

  return (

    <form>
      <input placeholder='Title of Your Build' name='title' value={title} isRequired />
      <input placeholder='Character Class EX: Demon Hunter..Necromancer...' name='characterKlass' value={characterKlass} />
      <input placeholder='Helm' name='helm' value={helm} />
      <input placeholder='Shoulders' name='shoulders' value={shoulders} />
      <input placeholder='Gloves' name='gloves' value={gloves} />
      <input placeholder='Chest Armor' name='chestArmor' value={chestArmor} />
      <input placeholder='Belt' name='belt' value={belt} />
      <input placeholder='Pants' name='pants' value={pants} />
      <input placeholder='Boots' name='boots' value={boots} />
      <input placeholder='Bracers' name='bracers' value={bracers} />
      <input placeholder='Amulet' name='amulet' value={amulet} />
      <input placeholder='Ring 1' name='ring1' value={ring1} />
      <input placeholder='Ring 2' name='ring2' value={ring2} />
      <input placeholder='Weapon' name='weapon' value={weapon} />
      <input placeholder='Offhand' name='offhand' value={offhand} />
      <textarea placeholder='Gems EX: Legendaries and Common Gems to Socket' name='gemNotes' value={gemNotes} />
      <textarea placeholder="Kanai's Cube What Legendary Powers to Extract" name='kanaisCube' value={kanaisCube} />
      <textarea placeholder='Active Skills' name='activeSkills' value={activeSkills} />
      <textarea placeholder='Passive Skills' name='passiveSkills' value={passiveSkills} />
      <textarea placeholder='Random Build Notes' name='generalBuildNotes' value={generalBuildNotes} />
      <input type='submit' value={'Create Character'} />
    </form>
  )
}

export default CharacterForm