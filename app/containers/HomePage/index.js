import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { increment, decrement } from './actions'

export class HomePage extends PureComponent {
  render () {
    return (
      <div>
        Current counter value: {this.props.count}
        <div><button onClick={this.props.onIncrement}>Increment</button></div>
        <div><button onClick={this.props.onDecrement}>Decrement</button></div>
      </div>
    )
  }
}

const getCountValue = state => {
  const count = state.get('counterApp')
  const countArray = [...count.values()]
  return countArray
}

const mapStateToProps = state => ({
  count: getCountValue(state)
})

function mapDispatchToProps (dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage))
