import React from 'react'
import ItemCard from '../components/FarmingList/ItemCard'
import MyFarmingList from '../components/FarmingList/MyFarmingList'
import NewItemFormWrapper from '../components/FarmingList/NewItemFormWrapper'
import EditItemFormWrapper from '../components/FarmingList/EditItemFormWrapper'
import {connect} from 'react-redux'
import {Route, Switch, withRouter} from 'react-router-dom'
import { getCurrentUser } from "../actions/currentUser"

class FarmingListContainer extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const {loggedIn, items} = this.props
    return (
      <div>
        <Switch>
          <Route exact path='/farminglist' component={MyFarmingList}/>
          <Route exact path='/farminglist/new' component={NewItemFormWrapper} />
          <Route exact path='/items/:id' render={props => {
            const item = items.find(item => item.id === props.match.params.id)
            console.log(item)
            return <ItemCard item={item} {...props} />
          }}/>
          <Route exact path='/items/:id/edit' render={props => {
              const item = items.find(item => item.id === props.match.params.id)
              return <EditItemFormWrapper item={item} {...props}/>
            }
          }/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return({
  loggedIn: !!state.currentUser,
  items: state.myFarmingList
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(FarmingListContainer));