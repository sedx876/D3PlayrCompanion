import React from 'react'
import CharacterForm from './CharacterForm'
import { updateCharacter, deleteCharacter } from '../actions/myCharacters'
import { setFormDataForEdit, resetCharacterForm } from '../actions/characterForm'
import { connect } from 'react-redux'

class EditCharacterFormWrapper extends React.Component {

  componentDidMount(){
    this.props.character && this.props.setFormDataForEdit(this.props.character)
  }

  componentDidUpdate(prevProps){
    this.props.character && !prevProps.character && this.props.setFormDataForEdit(this.props.character)
  }

  componentWillUnmount(){
    this.props.resetCharacterForm()
  }

  handleSubmit = (formData) => {
    const { updateCharacter, character, history } = this.props
    updateCharacter({
      ...formData,
      characterId: character.id
    }, history)
  }

  render() {
    const { deleteCharacter, character, history } = this.props 
    const characterId = character ? character.id : null
    return <>
            <CharacterForm editMode handleSubmit={this.handleSubmit} />
            <br />
            <button onClick={() => deleteCharacter(characterId, history)}>Delete this Build</button>
          </>
  }
}

export default connect(null, { updateCharacter, setFormDataForEdit, resetCharacterForm, deleteCharacter })(EditCharacterFormWrapper)