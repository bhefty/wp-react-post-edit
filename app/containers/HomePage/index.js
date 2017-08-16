import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { loadRecentPosts, deletePost, editTitle } from './actions'

import {
  makeSelectLoading,
  makeSelectError,
  makeSelectRecentPosts
} from './selectors'

import H1 from 'components/H1'
import H2 from 'components/H2'
import H3 from 'components/H3'
import RecentPosts from 'components/RecentPosts'

export class HomePage extends PureComponent {
  static propTypes = {
    recentPosts: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.bool
    ]),
    loading: PropTypes.bool,
    error: PropTypes.string
  }

  componentDidMount () {
    this.props.onLoadRecentPosts()
  }

  render () {
    return (
      <div className='row'>
        <div className='col-md-8'>
          <H1>Quick Editor</H1>
          <p>Update and change the title or featured image of one of your recent posts quickly. Don’t need it anymore? Feel free to delete it!</p>
          <H2>Recent Posts</H2>
          {this.props.recentPosts.length > 0
            ? <RecentPosts
              recentPosts={this.props.recentPosts}
              error={this.props.error}
              loading={this.props.loading}
              onDeletePost={this.props.onDeletePost}
              onChangeTitle={this.props.onChangeTitle}
              onReloadPosts={this.props.onLoadRecentPosts}
              text={this.props.text}
            />
            : <p>Hmmm... you don't appear to have any posts...  :(</p>
          }
        </div>
        <div className='col-md-offset-1 col-md-3'>
          <H2>Help</H2>
          <H3>Title</H3>
          <ul>
            <li>Click the Edit icon next to the title</li>
            <li>Type in a new title</li>
            <li>Click Save when finished editing</li>
          </ul>
          <H3>Featured Image</H3>
          <ul>
            <li>Click the Edit icon at the bottom of the image</li>
            <li>Upload a new image or choose one from your gallery</li>
            <li>Save Changes and close the popup</li>
          </ul>
          <H3>Delete Post</H3>
          <ul>
            <li>Click the Delete icon next to the title</li>
            <li>Confirm that you want to delete</li>
          </ul>
          <br />
          <footer>
            Made by <a href='https://www.billhefty.com' target='_blank'>Bill Hefty</a>
          </footer>
        </div>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  recentPosts: makeSelectRecentPosts()
})

export function mapDispatchToProps (dispatch) {
  return {
    onLoadRecentPosts: () => dispatch(loadRecentPosts()),
    onDeletePost: (id) => dispatch(deletePost(id)),
    onChangeTitle: (id, text) => dispatch(editTitle(id, text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
