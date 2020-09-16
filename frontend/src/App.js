import React from 'react';
import './styles/App.css';
import Login from './components/Login'
import Signup from './components/Signup'
import Logout from './components/Logout'
import Navbar from './components/Navbar'
import { connect } from 'react-redux';
import { getCurrentUser } from "./actions/currentUser.js"
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
        <Login />
        <Signup />
        <Logout />
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
