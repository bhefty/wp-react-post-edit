import { fromJS } from 'immutable'

import {
  LOAD_RECENT_POSTS,
  LOAD_RECENT_POSTS_SUCCESS,
  LOAD_RECENT_POSTS_ERROR,
  DELETE_POST,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
  EDIT_TITLE,
  EDIT_TITLE_SUCCESS,
  EDIT_TITLE_ERROR
} from './constants'

const initialState = fromJS({
  loading: false,
  error: false,
  id: false,
  recentPostsData: {
    recentPosts: false
  },
  deletePostData: {
    msg: false
  },
  titleData: {
    text: '',
    msg: false
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
    case DELETE_POST:
      return state
        .set('loading', true)
        .set('error', false)
        .set('id', action.id)
        .setIn(['deletePostData', 'msg'], false)
    case DELETE_POST_SUCCESS:
      return state
        .setIn(['deletePostData', 'msg'], action.msg)
    case DELETE_POST_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false)
    case EDIT_TITLE:
      return state
        .set('loading', true)
        .set('error', false)
        .set('id', action.id)
        .setIn(['titleData', 'text'], action.text)
    case EDIT_TITLE_SUCCESS:
      return state
        .setIn(['titleData', 'msg'], action.msg)
    case EDIT_TITLE_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false)
    default:
      return state
  }
}

export default homeReducer
