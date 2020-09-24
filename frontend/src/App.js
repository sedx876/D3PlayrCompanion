import React, { Component } from 'react'
import CharacterBuildContainer from './containers/CharacterBuildContainer'
import 'bootswatch/dist/darkly/bootstrap.min.css'
import FarmingListContainer from './containers/FarmingListContainer'

export class App extends Component {
  render() {
    return (
      <div>
        <FarmingListContainer />
        <CharacterBuildContainer />
      </div>
    )
  }
}

export default App
