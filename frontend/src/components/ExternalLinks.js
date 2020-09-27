import React from 'react'
import { Route, Switch } from 'react-router-dom'

class ExternalLinks extends React.Component {

  render() {
    return (
      <div>
        <div class="card text-white bg-dark mb-3">
          <h4 class="card-title"><a href="https://us.diablo3.com/en/" target="_blank">Official Diablo Site</a></h4>
          <p class="card-text">Go directly to the official Diablo 3 source.</p>
        </div>
    <br />
        <div class="card text-white bg-dark mb-3">
          <h4 class="card-title"><a href="https://www.icy-veins.com/" target="_blank">Icy Veins</a></h4>
          <p class="card-text">If you are at a lose at where to begin with a build try any of these numerous tested builds.</p>
        </div>
      </div>
        
      
    )
  }
}

export default ExternalLinks