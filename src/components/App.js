import React, { PropTypes } from 'react'

const App = (props) => (
  <div>
    <p>Hello, world!</p>
    <p>Clicked {props.count} times.</p>
    <button onClick={props.incrementCount}>Click me</button>
  </div>
)

App.propTypes = {
  count: PropTypes.number,
  incrementCount: PropTypes.func,
}

export default App
