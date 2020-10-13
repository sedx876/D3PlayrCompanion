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


  //componentDidMount is a lifecycle method runs after first render
  //setting making sure we have a current user

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props
    return (
      <div>
        { loggedIn ? <Navbar /> : <Home />}
        <CharacterBuildContainer />
        <FarmingListContainer />
        <StaticContainer/>
        <Footer />
      </div>
    )
  }
}


//is used for selecting the part of the data from the store 
//that the connected component needs. 

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
  })
}
//withRouter is supplied by react-router-dom and gives access 
//to props.history
export default withRouter(connect(mapStateToProps, {getCurrentUser})(App))
