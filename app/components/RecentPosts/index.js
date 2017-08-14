/**
*
* RecentPosts
*
*/

import React from 'react'
import PropTypes from 'prop-types'

import LoadingIndicator from 'components/LoadingIndicator'
import PostItem from 'components/PostItem'

/**
 * decodeHtml example from:
 * https://stackoverflow.com/questions/7394748/whats-the-right-way-to-decode-a-string-that-has-special-html-entities-in-it/7394787#7394787
 */
function decodeHtml (html) {
  let txt = document.createElement('textarea')
  txt.innerHTML = html
  return txt.value
}

function RecentPosts ({ loading, error, recentPosts, onDeletePost, onChangeTitle }) {
  if (loading) {
    return <LoadingIndicator />
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <p>An error occurred retreiving latests posts</p>
    )
    return <ErrorComponent />
  }

  if (recentPosts !== false) {
    return (
      <div>
        {recentPosts.map((post, idx) => {
          return <PostItem key={idx} title={decodeHtml(post.title.rendered)} postId={post.id} onDeletePost={onDeletePost} onChangeTitle={onChangeTitle} />
        })}
      </div>
    )
  }

  return null
}

RecentPosts.propTypes = {
  recentPosts: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool
  ]),
  loading: PropTypes.bool,
  error: PropTypes.any,
  onDeletePost: PropTypes.func,
  onChangeTitle: PropTypes.func
}

export default RecentPosts
