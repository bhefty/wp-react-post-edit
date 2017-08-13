/**
*
* PostItem
*
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'
import Title from './Title'
import request from 'utils/request'

export class PostItem extends Component {
  constructor (props) {
    super()
    this.select = this.select.bind(this)
    this.delete = this.delete.bind(this)
  }
  /* istanbul ignore next */
  select () {
    // Explicitly select the text input using the raw DOM API
    this.titleInput.select()
  }

  /* istanbul ignore next */
  delete () {
    let location = window.location.href
    location = location.split('wp-admin')[0]
    const requestURL = `${location}/wp-json/wp/v2/posts/1`
    request(requestURL, {
      method: 'DELETE',
      headers: {
        'X-WP-Nonce': window.wpApiSettings.nonce
      },
      credentials: 'same-origin'
    })
      .then((result) => console.log(result))
  }
  render () {
    const { title, postId } = this.props
    return (
      <Wrapper className='row'>
        <Title
          className='col-sm-12'
          value={title}
          innerRef={(input) => { this.titleInput = input }}
        />
        <button onClick={this.select} style={{ backgroundColor: 'lightblue', color: 'white' }} className='col-sm-12 col-md-6'>Edit Title</button>
        <button onClick={/* istanbul ignore next */() => this.props.onDeletePost(postId)} style={{ backgroundColor: 'red', color: 'white' }} className='col-sm-12 col-md-6'>Delete Post</button>
      </Wrapper>
    )
  }
}

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired,
  onDeletePost: PropTypes.func
}

export default PostItem
