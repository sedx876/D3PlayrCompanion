import React from 'react'
import {connect} from 'react-redux'
import {updateFarmingListForm} from '../../actions/farmingListForm'

const FarmingListForm = ({ formData, updateFarmingListForm, handleSubmit, editMode }) => {

  const { name, notes } = formData

  const handleChange = event => {
    console.log('triggered handleChange')
    const { name, value } = event.target
    updateFarmingListForm(name, value)
  }

  return (
    <div className="card text-white bg-secondary">
      <form className="form-group"
      onSubmit={event => {
        event.preventDefault()
        handleSubmit(formData)
      }}>
      <input className="form-control col-sm-8" onChange={handleChange} placeholder='Add Item' name='name' value={name} isrequired='true' />
      <input className="form-control col-sm-8" onChange={handleChange} placeholder='Add Notes for Item' name='notes' value={notes} isrequired='true' />
      <input className="btn btn-outline-warning" type='submit' value={editMode ? 'Update Item' : 'Add Item'} />
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : ''
  return {
    formData: state.farmingListForm,
    userId
  }
}

export default connect(mapStateToProps, {updateFarmingListForm})(FarmingListForm)