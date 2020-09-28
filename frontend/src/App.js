import React, { Component } from 'react'
import CharacterBuildContainer from './containers/CharacterBuildContainer'
import 'bootswatch/dist/darkly/bootstrap.min.css'
import Footer from './components/Footer'
import FarmingListContainer from './containers/FarmingListContainer'
import { withRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { connect } from 'react-redux';
import { getCurrentUser } from "./actions/currentUser"
import StaticContainer from './containers/StaticContainer'


export class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props
    return (
      <div>
      {/* <Navbar /> */}
      { loggedIn ? <Navbar /> : <Home />}
        
        <CharacterBuildContainer />
        <FarmingListContainer />
        <StaticContainer/>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
  })
}

export default withRouter(connect(mapStateToProps, {getCurrentUser})(App))
