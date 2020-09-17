import { resetCharacterForm } from './characterForm'

export const setMyCharacters = characters => {
  return {
    type: "SET_MY_CHARACTERS",
    characters
  }
}

export const addCharacter = character => {
  return {
    type: "ADD_CHARACTER",
    character
  }
}

export const getMyCharacters = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/v1/characters', {
      credentials: 'include',
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(r => r.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(setMyCharacters(response.data))
      }
    })
    .catch(console.log)
  }
}

export const createCharacter = (characterData) => {
  return dispatch => {
    const sendableCharacterData = {
      title: characterData.title,
      character_klass: characterData.characterKlass,
      helm: characterData.helm,
      shoulders: characterData.shoulders,
      gloves: characterData.gloves,
      chest_armor: characterData.chestArmor,
      belt: characterData.belt,
      pants: characterData.pants,
      boots: characterData.boots,
      bracers: characterData.bracers,
      amulet: characterData.amulet,
      ring_1: characterData.ring1,
      ring_2: characterData.ring2,
      weapon: characterData.weapon,
      offhand: characterData.offhand,
      gem_notes: characterData.gemNotes,
      kanais_cube: characterData.kanaisCube,
      active_skills: characterData.activeSkills,
      passive_skills: characterData.passiveSkills,
      general_build_notes: characterData.generalBuildNotes,
      user_id: characterData.userId
    }
    return fetch('http://localhost:3001/api/v1/characters', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendableCharacterData)
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(addCharacter(resp.data))
        dispatch(resetCharacterForm())
      }
    })
    .catch(console.log)
  }
}