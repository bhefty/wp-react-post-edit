import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { increment, decrement } from './actions'
import { makeSelectCount } from './selectors'

export class HomePage extends PureComponent {
  render () {
    return (
      <div>
        <h1>Welcome!</h1>
        Current counter value: {this.props.count}
        <div><button onClick={this.props.onIncrement}>Increment</button></div>
        <div><button onClick={this.props.onDecrement}>Decrement</button></div>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  count: makeSelectCount()
})

export function mapDispatchToProps (dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage))
