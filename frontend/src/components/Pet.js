import React from 'react'

const Pet = ({ onClick, done, text }) => (
  <li
  onClick={onClick}
  style={{
    textDecoration: done ? 'line-through' : 'none'
  }}>
  {text}
  </li>
)

export default Pet