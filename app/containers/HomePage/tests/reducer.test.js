import { fromJS } from 'immutable'

import homeReducer from '../reducer'

import {
  loadRecentPosts,
  recentPostsLoaded,
  recentPostsLoadingError,
  deletePost,
  deletePostSuccess,
  deletePostError,
  editTitle
} from '../actions'

describe('homeReducer', () => {
  let state
  beforeEach(() => {
    state = fromJS({
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
        text: ''
      }
    })
  })

  it('should return the initial state', () => {
    const expectedResult = state
    expect(homeReducer(undefined, {})).toEqual(expectedResult)
  })

  it('should handle the loadRecentPosts action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .setIn(['recentPostsData', 'recentPosts'], false)
    expect(homeReducer(state, loadRecentPosts())).toEqual(expectedResult)
  })

  it('should handle the recentPostsLoaded action correctly', () => {
    const fixture = {
      recentPosts: [
        { title: 'books' },
        { title: 'blog' }
      ]
    }
    const expectedResult = state
      .setIn(['recentPostsData', 'recentPosts'], fixture)
      .set('loading', false)
    expect(homeReducer(state, recentPostsLoaded(fixture))).toEqual(expectedResult)
  })

  it('should handle the recentPostsLoadingError action correctly', () => {
    const fixture = { msg: 'Error' }
    const expectedResult = state
      .set('error', fixture)
      .set('loading', false)
    expect(homeReducer(state, recentPostsLoadingError(fixture))).toEqual(expectedResult)
  })

  it('should handle the deletePost action correclty', () => {
    const fixture = { id: '1' }
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .set('id', fixture)
      .setIn(['deletePostData', 'msg'], false)
    expect(homeReducer(state, deletePost(fixture))).toEqual(expectedResult)
  })

  it('should handle the deletePostSuccess action correclty', () => {
    const fixture = { msg: 'Success' }
    const expectedResult = state
      .setIn(['deletePostData', 'msg'], fixture)
      .set('loading', false)
    expect(homeReducer(state, deletePostSuccess(fixture))).toEqual(expectedResult)
  })

  it('should handle the deletePostError action correclty', () => {
    const fixture = { error: 'Error' }
    const expectedResult = state
      .set('error', fixture)
      .set('loading', false)
    expect(homeReducer(state, deletePostError(fixture))).toEqual(expectedResult)
  })

  it('should handle the editTitle action correctly', () => {
    const fixture = { text: 'New title' }
    const expectedResult = state
      .setIn(['titleData', 'text'], fixture)
    expect(homeReducer(state, editTitle(fixture))).toEqual(expectedResult)
  })
})
