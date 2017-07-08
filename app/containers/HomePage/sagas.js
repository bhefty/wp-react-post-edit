// Gets Yoda-Speak translation of text from MaShape

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'
import { LOAD_TRANSLATION } from 'containers/App/constants'
import { translationLoaded, translationLoadingError } from 'containers/App/actions'

import request from 'utils/request'
import { makeSelectText } from 'containers/HomePage/selectors'

// Yoda-Speak MaShape translation request/response handler
export function * getTranslation () {
  // Select text from store
  const text = yield select(makeSelectText())
  const requestURL = `http://yoda-speak-wrapper.herokuapp.com/api/${text}`

  try {
    // Call request helper ('utils/request')
    const translation = yield call(request, requestURL)
    yield put(translationLoaded(translation, text))
  } catch (err) {
    yield put(translationLoadingError(err))
  }
}

// Root saga manages watcher lifecycle
export function * translationData () {
  // Watches for LOAD_TRANSLATION actions and calls getTranslation when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor so we can continue execution
  const watcher = yield takeLatest(LOAD_TRANSLATION, getTranslation)

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

// Bootstrap sagas
export default [
  translationData
]
