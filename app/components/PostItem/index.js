/**
*
* PostItem
*
*/

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'
import Title from './Title'
import request from 'utils/request'

export class PostItem extends PureComponent {
  state = {
    edit: false,
    editTitleText: this.props.title
  }

  /* istanbul ignore next */
  editTitle = () => {
    this.setState({ edit: true })
  }

  onEdit = (evt) => {
    this.setState({ editTitleText: evt.target.value })
  }

  changeTitle = (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault()
    console.log('target', this.state.editTitleText)
    this.props.onChangeTitle(this.state.editTitleText)
  }

  /* istanbul ignore next */
  delete = () => {
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
        <form onSubmit={this.changeTitle} >
          {this.state.edit
            ? <Title className='col-sm-12' value={this.state.editTitleText} onChange={this.onEdit.bind(this)} />
            : <input readOnly value={title} />
          }
          <button onClick={this.editTitle} style={{ backgroundColor: 'lightblue', color: 'white' }} className='col-sm-12 col-md-6'>Edit Title</button>
          <button onClick={/* istanbul ignore next */() => this.props.onDeletePost(postId)} style={{ backgroundColor: 'red', color: 'white' }} className='col-sm-12 col-md-6'>Delete Post</button>
        </form>
      </Wrapper>
    )
  }
}

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired,
  onDeletePost: PropTypes.func,
  onChangeTitle: PropTypes.func
}

export default PostItem
