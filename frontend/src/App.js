import React from 'react';
import './styles/App.css';
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { connect } from 'react-redux';
import { getCurrentUser } from "./actions/currentUser.js"
import { Route, Switch, withRouter } from 'react-router-dom'
import 'bootswatch/dist/slate/bootstrap.min.css'
import MyCharacters from './components/MyCharacters'
import CharacterCard from './components/CharacterCard'
import NewCharacterFormWrapper from './components/NewCharacterFormWrapper.js'
import EditCharacterFormWrapper from './components/EditCharacterFormWrapper.js'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn, characters } = this.props
    return (
      <div className="App">
        { loggedIn ? <Navbar /> : <Home />}
        <Switch>
          <Route exact path='/signup' render={({history}) =><Signup history={history}/>}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/characters' component={MyCharacters}/>
          <Route exact path='/characters/new' component={NewCharacterFormWrapper}/>
          <Route exact path='/characters/:id' render={props => {
              const character = characters.find(character => character.id === props.match.params.id)
              console.log(character)
              return <CharacterCard character={character} {...props}/>
            }
          }/>
          <Route exact path='/characters/:id/edit' render={props => {
              const character = characters.find(character => character.id === props.match.params.id)
              return <EditCharacterFormWrapper character={character} {...props}/>
            }
          }/>
          {/* <Route exact path='/characters/cards' component={CharacterCard}/> */}
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    characters: state.myCharacters
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
