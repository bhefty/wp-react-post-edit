/**
*
* PostItem
*
*/

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import FeaturedImage from 'components/FeaturedImage'
import ChangeFeaturedImage from 'components/ChangeFeaturedImage'
import PostTitle from 'components/PostTitle'
import Wrapper from './Wrapper'

export class PostItem extends PureComponent {
  state = {
    editingTitle: false,
    editTitleText: this.props.title,
    imageModalOpen: false
  }

  editTitle = () => {
    this.setState({ editingTitle: true })
  }

  onEdit = (evt) => {
    this.setState({ editTitleText: evt.target.value })
  }

  openEditImage = () => {
    this.setState({ imageModalOpen: true })
  }

  closeEditImage = () => {
    this.setState({ imageModalOpen: false })
  }

  changeTitle = (evt, id) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault()
    this.props.onChangeTitle(id, this.state.editTitleText)
  }

  render () {
    const { title, postId, featuredMedia } = this.props
    return (
      <Wrapper className='row'>
        {this.state.imageModalOpen &&
          <ChangeFeaturedImage
            isOpen={this.state.imageModalOpen}
            closeModal={this.closeEditImage}
            onRequestClose={this.state.closeEditImage}
            postId={postId}
          />
        }
        <FeaturedImage
          className='col-md-4'
          src={featuredMedia || 'https://images.pexels.com/photos/66100/pexels-photo-66100.jpeg'}
          alt={title}
          openEditImage={this.openEditImage}
        />
        <PostTitle
          className='col-md-8'
          handleSubmit={(evt) => this.changeTitle(evt, postId)}
          handleChange={this.onEdit.bind(this)}
          handleEdit={this.editTitle}
          handleDelete={() => this.props.onDeletePost(postId)}
          title={title}
          editingTitle={this.state.editingTitle}
          editTitleText={this.state.editTitleText}
        />
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
