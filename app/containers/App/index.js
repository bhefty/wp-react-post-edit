import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    return (
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/next'>Next</Link></li>
        </ul>
        {React.Children.toArray(this.props.children)}
      </div>
    )
  }
}
