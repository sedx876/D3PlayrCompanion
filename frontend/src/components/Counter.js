import React, {Component} from 'react'


class Counter extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <>
      <button className="btn btn-dark" onClick={this.handleIncrement}>Like</button>
      <h6>Likes: {this.state.count}</h6>
      </>
    )
  }

}


export default Counter