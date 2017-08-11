/**
*
* RecentPosts
*
*/

import React from 'react'
import PropTypes from 'prop-types'

import LoadingIndicator from 'components/LoadingIndicator'

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
          return <p key={idx}>{post.title.rendered}</p>
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
