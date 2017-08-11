/**
*
* PostItem
*
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'
import Title from './Title'

export class PostItem extends Component {
  constructor (props) {
    super()
    this.select = this.select.bind(this)
  }
  /* istanbul ignore next */
  select () {
    // Explicitly select the text input using the raw DOM API
    this.titleInput.select()
  }
  render () {
    const { title } = this.props
    return (
      <Wrapper className='row'>
        <Title
          className='col-sm-12'
          value={title}
          innerRef={(input) => { this.titleInput = input }}
        />
        <button onClick={this.select} style={{ backgroundColor: 'lightblue', color: 'white' }} className='col-sm-12 col-md-6'>Edit Title</button>
        <button style={{ backgroundColor: 'red', color: 'white' }} className='col-sm-12 col-md-6'>Delete Post</button>
      </Wrapper>
    )
  }
}

PostItem.propTypes = {
  title: PropTypes.string.isRequired
}

export default PostItem
