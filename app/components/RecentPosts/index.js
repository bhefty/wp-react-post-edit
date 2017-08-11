/**
*
* RecentPosts
*
*/

import React from 'react'
import PropTypes from 'prop-types'

import LoadingIndicator from 'components/LoadingIndicator'
import PostItem from 'components/PostItem'

function RecentPosts ({ loading, error, recentPosts }) {
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
          return <PostItem key={idx} title={post.title.rendered} />
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
  error: PropTypes.any
}

export default RecentPosts
