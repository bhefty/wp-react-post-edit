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
          <p>Update and change the title of one of your recent posts quickly. Don’t need it anymore? Feel free to delete it!</p>
          <H2>Recent Posts</H2>
          <RecentPosts
            recentPosts={this.props.recentPosts}
            error={this.props.error}
            loading={this.props.loading}
            onDeletePost={this.props.onDeletePost}
            onChangeTitle={this.props.onChangeTitle}
            onReloadPosts={this.props.onLoadRecentPosts}
            text={this.props.text}
          />
        </div>
        <div className='col-md-offset-1 col-md-3'>
          <H3>Help</H3>
          <ul>
            <li>Click the title text to edit it</li>
            <li>Click Save when finished editing</li>
            <li>Click Cancel to discard changes without saving</li>
            <li>Click Delete Post to discard the entire post</li>
          </ul>
          <footer>
            Made by Bill Hefty
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
