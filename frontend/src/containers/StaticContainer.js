import React from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Login from '../components/Users/Login'
import Signup from '../components/Users/Signup'

class StaticContainer extends React.Component {


  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/signup' render={({history}) =><Signup history={history}/>}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
      </div>
    )
  }
}


export default StaticContainer 