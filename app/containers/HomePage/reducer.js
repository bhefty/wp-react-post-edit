import { fromJS } from 'immutable'

import {
  LOAD_RECENT_POSTS,
  LOAD_RECENT_POSTS_SUCCESS,
  LOAD_RECENT_POSTS_ERROR
} from './constants'

const initialState = fromJS({
  loading: false,
  error: false,
  recentPostsData: {
    recentPosts: false
  }
})

function homeReducer (state = initialState, action) {
  switch (action.type) {
    case LOAD_RECENT_POSTS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['recentPostsData', 'recentPosts'], false)
    case LOAD_RECENT_POSTS_SUCCESS:
      return state
        .setIn(['recentPostsData', 'recentPosts'], action.recentPosts)
        .set('loading', false)
    case LOAD_RECENT_POSTS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false)
    default:
      return state
  }
}

export default homeReducer
