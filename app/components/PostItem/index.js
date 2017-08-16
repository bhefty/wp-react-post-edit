/**
*
* PostItem
*
*/

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import FeaturedImage from 'components/FeaturedImage'
import ChangeFeaturedImage from 'components/ChangeFeaturedImage'
import DeleteConfirmation from 'components/DeleteConfirmation'
import PostTitle from 'components/PostTitle'
import Wrapper from './Wrapper'

const fillerImage = 'https://res.cloudinary.com/bhefty/image/upload/v1502849251/no-featured-image_h9gsnu.jpg'

export class PostItem extends PureComponent {
  state = {
    editingTitle: false,
    editTitleText: this.props.title,
    imageModalOpen: false,
    deleteModalOpen: false
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
    this.props.onReloadPosts()
    this.setState({ imageModalOpen: false })
  }

  changeTitle = (evt, id) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault()
    this.props.onChangeTitle(id, this.state.editTitleText)
  }

  openDeleteConfirmation = () => {
    this.setState({ deleteModalOpen: true })
  }

  closeDeleteConfirmation = (canDelete, postId) => {
    this.setState({ deleteModalOpen: false })
    if (canDelete) {
      this.props.onDeletePost(postId)
    }
  }

  render () {
    const { title, postId, featuredMedia } = this.props
    return (
      <Wrapper className='row'>
        <FeaturedImage
          className='col-md-4'
          src={featuredMedia || fillerImage}
          alt={title}
          openEditImage={this.openEditImage}
        />
        <PostTitle
          className='col-md-8'
          handleSubmit={(evt) => this.changeTitle(evt, postId)}
          handleChange={this.onEdit.bind(this)}
          handleEdit={this.editTitle}
          handleDelete={this.openDeleteConfirmation}
          title={title}
          editingTitle={this.state.editingTitle}
          editTitleText={this.state.editTitleText}
        />
        {this.state.imageModalOpen &&
          <ChangeFeaturedImage
            isOpen={this.state.imageModalOpen}
            closeModal={this.closeEditImage}
            onRequestClose={this.state.closeEditImage}
            postId={postId}
          />
        }
        {this.state.deleteModalOpen &&
          <DeleteConfirmation
            isOpen={this.state.deleteModalOpen}
            postId={postId}
            closeModal={(canDelete, postId) => this.closeDeleteConfirmation(canDelete, postId)}
            onRequestClose={(canDelete, postId) => this.closeDeleteConfirmation(canDelete, postId)}
          />
        }
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
