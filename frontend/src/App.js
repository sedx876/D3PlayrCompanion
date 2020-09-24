import React, { Component } from 'react'
import CharacterBuildContainer from './containers/CharacterBuildContainer'
import 'bootswatch/dist/darkly/bootstrap.min.css'

export class App extends Component {
  render() {
    return (
      <div>
        <CharacterBuildContainer />
      </div>
    )
  }
}

export default App
