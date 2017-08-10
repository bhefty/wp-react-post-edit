import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { loadRecentPosts } from './actions'
import { makeSelectRecentPosts } from './selectors'

export class HomePage extends PureComponent {
  static propTypes = {
    recentPosts: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.bool
    ])
  }

  render () {
    return (
      <div>
        <div>
          <button onClick={this.props.onLoadRecentPosts}>Load recent posts</button>
          {/* istanbul ignore next */ this.props.recentPosts &&
            this.props.recentPosts.map((post, idx) => {
              /* istanbul ignore next */
              return <p key={idx}>{post.title.rendered}</p>
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  recentPosts: makeSelectRecentPosts()
})

export function mapDispatchToProps (dispatch) {
  return {
    onLoadRecentPosts: () => dispatch(loadRecentPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
