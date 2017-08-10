import { fromJS } from 'immutable'

import homeReducer from '../reducer'

import {
  loadRecentPosts,
  recentPostsLoaded,
  recentPostsLoadingError
} from '../actions'

describe('homeReducer', () => {
  let state
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      recentPostsData: {
        recentPosts: false
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
})
