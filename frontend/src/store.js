import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import currentUser from './reducers/currentUser'
import thunk from 'redux-thunk'
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm'
import myCharacters from './reducers/myCharacters'
import characterForm from './reducers/characterForm'

const reducer = combineReducers({
  currentUser,
  loginForm,
  signupForm,
  myCharacters,
  characterForm
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store