import React from 'react'
import FarmingListForm from './FarmingListForm'
import { createItem } from '../../actions/myFarmingList'
import { connect } from 'react-redux'

const NewItemFormWrapper = ({ createItem, history }) => {

  const handleSubmit = (formData, userId) => {
    createItem({
      ...formData,
      userId
    }, history)
  }
  return <FarmingListForm handleSubmit={handleSubmit} />
}

export default connect(null, { createItem })(NewItemFormWrapper)