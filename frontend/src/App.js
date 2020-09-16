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

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props
    return(
      <div className="App">
      <Navbar />

        {/* <Login />
        <Signup />
        <Logout /> */}
        <Switch>
          <Route exact path='/home' component={Home} />
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
    
  })
}

export default connect(mapStateToProps, { getCurrentUser })(App)
