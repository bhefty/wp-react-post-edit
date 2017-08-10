import {
  LOAD_RECENT_POSTS,
  LOAD_RECENT_POSTS_SUCCESS,
  LOAD_RECENT_POSTS_ERROR
} from '../constants'

import {
  loadRecentPosts,
  recentPostsLoaded,
  recentPostsLoadingError
} from '../actions'

describe('Home Actions', () => {
  describe('loadRecentPosts', () => {
    it('should return the correct type', () => {
      const expectedResult = { type: LOAD_RECENT_POSTS }
      expect(loadRecentPosts()).toEqual(expectedResult)
    })
  })

  describe('recentPostsLoaded', () => {
    it('should return the correct type', () => {
      const fixture = {
        recentPosts: [
          { title: 'test' },
          { title: 'demo' }
        ]
      }
      const expectedResult = {
        type: LOAD_RECENT_POSTS_SUCCESS,
        recentPosts: fixture
      }
      expect(recentPostsLoaded(fixture)).toEqual(expectedResult)
    })
  })

  describe('recentPostsLoadingError', () => {
    const fixture = { msg: 'error' }
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_RECENT_POSTS_ERROR,
        error: fixture
      }
      expect(recentPostsLoadingError(fixture)).toEqual(expectedResult)
    })
  })
})
