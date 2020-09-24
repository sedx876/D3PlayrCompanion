import React from 'react';
import Login from '../components/Users/Login'
import Signup from '../components/Users/Signup'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import { connect } from 'react-redux';
import { getCurrentUser } from "../actions/currentUser"
import { Route, Switch, withRouter } from 'react-router-dom'
import MyCharacters from '../components/CharacterBuild/MyCharacters'
import CharacterCard from '../components/CharacterBuild/CharacterCard'
import Footer from '../components/Footer'
import NewCharacterFormWrapper from '../components/CharacterBuild/NewCharacterFormWrapper.js'
import EditCharacterFormWrapper from '../components/CharacterBuild/EditCharacterFormWrapper.js'

class CharacterBuildContainer extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn, characters } = this.props
    return (
      <div className="CharacterBuild">
        { loggedIn ? <Navbar /> : <Home />}
        <Switch>
          <Route exact path='/home' component={Home}/>
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
        
        <Footer />
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

export default withRouter(connect(mapStateToProps, { getCurrentUser })(CharacterBuildContainer));