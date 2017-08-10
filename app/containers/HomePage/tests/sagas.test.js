import { put, takeLatest } from 'redux-saga/effects'

import { LOAD_RECENT_POSTS } from 'containers/HomePage/constants'
import { recentPostsLoadingError } from 'containers/HomePage/actions'

import { getRecentPosts, recentPosts } from '../sagas'

/* eslint-disable redux-saga/yield-effects */
describe('getRecentPosts Saga', () => {
  let getRecentPostsGenerator

  // We have to test twice, once for successful load and once for unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getRecentPostsGenerator = getRecentPosts()

    const selectDescriptor = getRecentPostsGenerator.next().value
    expect(selectDescriptor).toMatchSnapshot()

    const callDescriptor = getRecentPostsGenerator.next().value
    expect(callDescriptor).toMatchSnapshot()
  })

  it('should call the recentPostsLoadingError action if the response errors', () => {
    const response = new Error('Some error')
    const putDescriptor = getRecentPostsGenerator.throw(response).value
    expect(putDescriptor).toEqual(put(recentPostsLoadingError(response)))
  })
})

describe('recentPost Saga', () => {
  const recentPostsSaga = recentPosts()

  it('should start task to watch for the LOAD_TRANSLATION action', () => {
    const takeLatestDescriptor = recentPostsSaga.next().value
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_RECENT_POSTS, getRecentPosts))
  })
})
