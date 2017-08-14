import {
  LOAD_RECENT_POSTS,
  LOAD_RECENT_POSTS_SUCCESS,
  LOAD_RECENT_POSTS_ERROR,
  DELETE_POST,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
  EDIT_TITLE
} from '../constants'

import {
  loadRecentPosts,
  recentPostsLoaded,
  recentPostsLoadingError,
  deletePost,
  deletePostSuccess,
  deletePostError,
  editTitle
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

  describe('deletePost', () => {
    const fixture = '1'
    it('should return the correct type and payload', () => {
      const expectedResult = {
        type: DELETE_POST,
        id: fixture
      }
      expect(deletePost(fixture)).toEqual(expectedResult)
    })
  })

  describe('deletePostSuccess', () => {
    const fixture = 'Success!'
    it('should return the correct type and payload', () => {
      const expectedResult = {
        type: DELETE_POST_SUCCESS,
        msg: fixture
      }
      expect(deletePostSuccess(fixture)).toEqual(expectedResult)
    })
  })

  describe('deletePostError', () => {
    const fixture = 'Error occurred'
    it('should return the correct type and payload', () => {
      const expectedResult = {
        type: DELETE_POST_ERROR,
        error: fixture
      }
      expect(deletePostError(fixture)).toEqual(expectedResult)
    })
  })

  describe('editTitle', () => {
    const fixture = 'New title'
    it('should return the correct type and payload', () => {
      const expectedResult = {
        type: EDIT_TITLE,
        text: fixture
      }
      expect(editTitle(fixture)).toEqual(expectedResult)
    })
  })
})
