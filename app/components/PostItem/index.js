/**
*
* PostItem
*
*/

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import FeaturedImage from 'components/FeaturedImage'
import ChangeFeaturedImage from 'components/ChangeFeaturedImage'
import Wrapper from './Wrapper'
import Title from './Title'

export class PostItem extends PureComponent {
  state = {
    edit: false,
    editTitleText: this.props.title,
    imageModalOpen: false
  }

  editTitle = () => {
    this.setState({ edit: true })
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
        {featuredMedia &&
          <FeaturedImage
            src={featuredMedia}
            alt={title}
            openEditImage={this.openEditImage}
          />
        }
        <form onSubmit={(evt) => this.changeTitle(evt, postId)} >
          {this.state.edit
            ? <Title className='col-sm-12' value={this.state.editTitleText} onChange={this.onEdit.bind(this)} />
            : <input readOnly value={title} />
          }
        </form>
        <button onClick={this.editTitle} style={{ backgroundColor: 'lightblue', color: 'white' }} className='col-sm-12 col-md-6'>Edit Title</button>
        <button onClick={() => this.props.onDeletePost(postId)} style={{ backgroundColor: 'red', color: 'white' }} className='col-sm-12 col-md-6'>Delete Post</button>
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
