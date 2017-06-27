import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class App extends PureComponent {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    return (
      <div>
        {React.Children.toArray(this.props.children)}
      </div>
    )
  }
}
