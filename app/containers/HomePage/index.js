import React, { PureComponent } from 'react'

export default class HomePage extends PureComponent {
  state = { input: '' }

  handleInputChange = e => {
    this.setState({ input: e.target.value })
  }
  render () {
    return (
      <div>
        <input
          type='text'
          value={this.state.input}
          onChange={this.handleInputChange}
        />
        <span>Hello {this.state.input}</span>
      </div>
    )
  }
}
