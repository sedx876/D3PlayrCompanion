import React, { Component } from 'react'
import CharacterBuildContainer from './containers/CharacterBuildContainer'
import 'bootswatch/dist/darkly/bootstrap.min.css'
import Footer from './components/Footer'
import About from './components/About'
import FarmingListContainer from './containers/FarmingListContainer'

export class App extends Component {
  render() {
    return (
      <div>
       <CharacterBuildContainer />
        <FarmingListContainer />
        {/* <About /> */}
        <Footer />
      </div>
    )
  }
}

export default App
