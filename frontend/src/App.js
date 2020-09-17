import React from 'react';
import './styles/App.css';
import Login from './components/Login'
import Signup from './components/Signup'
import Logout from './components/Logout'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { connect } from 'react-redux';
import { getCurrentUser } from "./actions/currentUser.js"
import { Route, Switch, withRouter } from 'react-router-dom'
import 'bootswatch/dist/slate/bootstrap.min.css'
import MyCharacters from './components/MyCharacters'
import CharacterForm from './components/CharacterForm'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn, characters } = this.props
    return(
      <div className="App">
      {/* { loggedIn ? <MyCharacters /> : <Home/> } */}

      <Navbar />
      { loggedIn ? <MyCharacters /> : <Home /> }
      {/* <MyCharacters /> */}
      <CharacterForm />

        {/* <Login />
        <Signup />
        <Logout /> */}
        <Switch>
        <Route exact path='/mycharacters' component={MyCharacters} /> 
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
          <Route exact path='/login' component={Login}/>
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
