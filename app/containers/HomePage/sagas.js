// Gets Yoda-Speak translation of text from MaShape

import { call, put, take, takeLatest, all, fork, select } from 'redux-saga/effects'
import {
  LOAD_RECENT_POSTS,
  DELETE_POST,
  DELETE_POST_SUCCESS,
  EDIT_TITLE,
  EDIT_TITLE_SUCCESS
} from 'containers/HomePage/constants'

import {
  recentPostsLoaded,
  recentPostsLoadingError,
  deletePostSuccess,
  deletePostError,
  editTitleSuccess,
  editTitleError
} from 'containers/HomePage/actions'

import { makeSelectId, makeSelectEditText } from 'containers/HomePage/selectors'

import request from 'utils/request'

// GET
// Recent posts request/response handler
export function * getRecentPosts () {
  const root = window.wpApiSettings.root
  const requestURL = `${root}wp/v2/posts?orderBy=date&order=desc&per_page=5`

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
  // Watches for the LOAD_RECENT_POSTS action and calls getRecentPosts when one comes in.
  yield takeLatest(LOAD_RECENT_POSTS, getRecentPosts)
}

// DELETE
// Delete post request/response handler
export function * deletePostSaga () {
  const id = yield select(makeSelectId())
  const root = window.wpApiSettings.root
  const requestURL = `${root}wp/v2/posts/${id}`
  const options = {
    method: 'DELETE',
    headers: {
      'X-WP-Nonce': window.wpApiSettings.nonce
    },
    credentials: 'same-origin'
  }

  /* istanbul ignore next */
  try {
    // call request helper
    const deleteResponse = yield call(request, requestURL, options)
    yield put(deletePostSuccess(deleteResponse))
  } catch (err) {
    yield put(deletePostError(err))
  }
}

// Watch for request to delete post
export function * watchDeletePost () {
  while (true) {
    yield take(DELETE_POST)
    yield call(deletePostSaga)
  }
}

// Watch for delete post success to refresh recent posts
export function * watchDeletePostSuccess () {
  while (true) {
    yield take(DELETE_POST_SUCCESS)
    yield call(getRecentPosts)
  }
}

// EDIT
// Edit post title request/response handler
export function * editPostTitleSaga () {
  const id = yield select(makeSelectId())
  const text = yield select(makeSelectEditText())
  const root = window.wpApiSettings.root
  const requestURL = `${root}wp/v2/posts/${id}`
  const options = {
    method: 'POST',
    headers: {
      'X-WP-Nonce': window.wpApiSettings.nonce,
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin',
    body: JSON.stringify({
      title: text
    })
  }

  try {
    // call reqeust helper
    const editTitleResponse = yield call(request, requestURL, options)
    yield put(editTitleSuccess(editTitleResponse))
  } catch (err) {
    yield put(editTitleError(err))
  }
}

// Watch for request to edit title
export function * watchEditTitle () {
  while (true) {
    yield take(EDIT_TITLE)
    yield call(editPostTitleSaga)
  }
}

// Watch for edit post title success to refresh the recent posts
export function * watchEditTitleSuccess () {
  while (true) {
    yield take(EDIT_TITLE_SUCCESS)
    yield call(getRecentPosts)
  }
}

// Bootstrap sagas
export default function * homeSagas () {
  yield all([
    fork(recentPosts),
    fork(watchDeletePost),
    fork(watchDeletePostSuccess),
    fork(watchEditTitle),
    fork(watchEditTitleSuccess)
  ])
}
