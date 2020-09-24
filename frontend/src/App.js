import React, { Component } from 'react'
import CharacterBuildContainer from './containers/CharacterBuildContainer'
import 'bootswatch/dist/darkly/bootstrap.min.css'
import Footer from './components/Footer'
import FarmingListContainer from './containers/FarmingListContainer'

export class App extends Component {
  render() {
    return (
      <div>
       <CharacterBuildContainer />
        <FarmingListContainer />
        <Footer />
      </div>
    )
  }
}

export default App
