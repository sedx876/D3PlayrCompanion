import React from 'react'
import { connect } from 'react-redux'


const Signup = ({}) => {

  const handleUserInfoInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }


  const handleSubmit = event => {
    event.preventDefault()
    signup(signupFormData, history)
  }

  return (
    <form className='form-group'>
      <input placeholder='username' value={signupFormData.username} name='username' type='text' onChange={handleUserInfoInputChange} />
      <br />
      <input placeholder="password" value={signupFormData.password} name="password" type="text" onChange={handleUserInfoInputChange} />
      <br />
      <input type="submit" value="Sign Up"/>
    </form>
  )
}

export default Signup