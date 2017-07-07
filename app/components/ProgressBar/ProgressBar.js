import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'
import Percent from './Percent'

class ProgressBar extends Component {
  static propTypes = {
    percent: PropTypes.number.isRequired
  }

  static defaultProps = {
    percent: -1,
    autoIncrement: true,
    intervalTime: 75
  }

  state = {
    percent: this.props.percent
  }

  componentDidMount () {
    this.handleProps(this.props)
  }

  componentWillReceiveProps (nextProps) {
    if (this.interval) {
      // Stop progress when new props come in
      clearInterval(this.interval)
      this.interval = undefined
    }
    if (this.timeout) {
      // Clear timeout when new props come in
      clearTimeout(this.timeout)
      this.timeout = undefined
    }
    // Start progress with updated props
    this.handleProps(nextProps)
  }

  componentWillUnmount () {
    // Cleanup interval and timeout
    if (this.interval) {
      clearInterval(this.interval)
      this.interval = undefined
    }
    if (this.timeout) {
      clearTimeout(this.timeout)
      this.timeout = undefined
    }
  }

  increment = () => {
    // Increment the percent randomly
    // Only used when autoIncrement is set to true
    let { percent } = this.state
    percent += ((Math.random() + 1) - Math.random())
    /* istanbul ignore next */
    percent = percent < 99 ? percent : 99
    this.setState({ percent })
  }

  handleProps = (props) => {
    // Increment progress bar if autoIntrement is true
    // and progress percent is less than 99
    if (props.autoIncrement && props.percent >= 0 && props.percent < 99) {
      this.interval = setInterval(this.increment, props.intervalTime)
    }

    // Reset progress bar when percent is 100
    // For better visual effects, percent is set to 99.9
    // and then cleared in the callback after some time
    if (props.percent >= 100) {
      this.setState({
        percent: 99.9
      }, () => {
        this.timeout = setTimeout(() => {
          this.setState({
            percent: -1
          }, () => props.updateProgress(-1))
        }, 300)
      })
    } else {
      this.setState({
        percent: props.percent
      })
    }
  }

  render () {
    const { percent } = this.state

    // Hide progress bar if percent is less than 0
    const isHidden = percent < 0 || percent >= 100

    // Set `state.percent` as width
    const style = { width: `${(percent <= 0 ? 0 : percent)}%` }

    return (
      <Wrapper hidden={isHidden}>
        <Percent style={style} />
      </Wrapper>
    )
  }
}

export default ProgressBar
