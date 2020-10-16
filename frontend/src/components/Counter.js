import React, {Component} from 'react'
//import React, {useState} from 'react'

class Counter extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleIncrement() {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <>
      <button className="btn btn-dark" onClick={(e) => this.handleIncrement(e)}>Like</button>
      <h6>Likes: {this.state.count}</h6>
      </>
    )
  }

}

// const Counter = () => {
//   const [counter, setCounter] = useState(0)

//   return (
//     <>
//     <button className="btn btn-dark" onClick={() => {setCounter(counter + 1)}}>
//       Likes
//     </button>
//     <p>{counter}</p>
//     </>
//   )

// }

export default Counter