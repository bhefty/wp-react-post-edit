/**
 * TODO: Add sufficient Saga testing
 */

import { takeLatest, take } from 'redux-saga/effects'

import {
  LOAD_RECENT_POSTS,
  DELETE_POST
} from 'containers/HomePage/constants'

import {
  getRecentPosts,
  recentPosts,
  watchDeletePost
} from '../sagas'

/* eslint-disable redux-saga/yield-effects */

describe('recentPost Saga', () => {
  const recentPostsSaga = recentPosts()

  it('should start task to watch for the LOAD_TRANSLATION action', () => {
    const takeLatestDescriptor = recentPostsSaga.next().value
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_RECENT_POSTS, getRecentPosts))
  })
})

describe('watchDeletePost saga', () => {
  const watchDeletePostSaga = watchDeletePost()
  it('should start task to watch for DELETE_POST action', () => {
    const takeDescriptor = watchDeletePostSaga.next().value
    expect(takeDescriptor).toEqual(take(DELETE_POST))

    const callDescriptor = watchDeletePostSaga.next().value
    expect(callDescriptor).toMatchSnapshot()
  })
})
