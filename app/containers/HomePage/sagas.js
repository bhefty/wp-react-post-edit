// Gets Yoda-Speak translation of text from MaShape

import { call, put, takeLatest, all, fork } from 'redux-saga/effects'
import { LOAD_RECENT_POSTS } from 'containers/HomePage/constants'
import { recentPostsLoaded, recentPostsLoadingError } from 'containers/HomePage/actions'

import request from 'utils/request'

// Recent posts request/response handler
export function * getRecentPosts () {
  let location = window.location.href
  location = location.split('wp-admin')[0]
  const requestURL = `${location}/wp-json/wp/v2/posts?orderBy=date&order=desc&per_page=5`

  /* istanbul ignore next */
  try {
    // call request helper
    const recentPosts = yield call(request, requestURL)
    yield put(recentPostsLoaded(recentPosts))
  } catch (err) {
    yield put(recentPostsLoadingError(err))
  }
}

// Watch for request to get recent posts
export function * recentPosts () {
  // Watches for the LOAD_RECENT_POSTS action and calls getRcentPosts when one comes in.
  yield takeLatest(LOAD_RECENT_POSTS, getRecentPosts)
}

// Bootstrap sagas
export default function * homeSagas () {
  yield all([
    fork(recentPosts)
  ])
}
