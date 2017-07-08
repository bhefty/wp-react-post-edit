import { take, put, takeLatest } from 'redux-saga/effects'
import { createMockTask } from 'redux-saga/lib/utils'

import { LOCATION_CHANGE } from 'react-router-redux'

import { LOAD_TRANSLATION } from 'containers/App/constants'
import { translationLoaded, translationLoadingError } from 'containers/App/actions'

import { getTranslation, translationData } from '../sagas'

const text = 'we will translate this'

/* eslint-disable redux-saga/yield-effects */
describe('getTranslation Saga', () => {
  let getTranslationGenerator

  // We have to test twice, once for successful load and once for unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getTranslationGenerator = getTranslation()

    const selectDescriptor = getTranslationGenerator.next().value
    expect(selectDescriptor).toMatchSnapshot()

    const callDescriptor = getTranslationGenerator.next(text).value
    expect(callDescriptor).toMatchSnapshot()
  })

  it('should dispatch the translationLoaded action if it requests the data successfully', () => {
    const response = [{
      text: 'translate this we will'
    }]
    const putDescriptor = getTranslationGenerator.next(response).value
    expect(putDescriptor).toEqual(put(translationLoaded(response, text)))
  })

  it('should call the translationLoadingError action if the response errors', () => {
    const response = new Error('Some error')
    const putDescriptor = getTranslationGenerator.throw(response).value
    expect(putDescriptor).toEqual(put(translationLoadingError(response)))
  })
})

describe('translationData Saga', () => {
  const translationDataSaga = translationData()
  const mockedTask = createMockTask()

  it('should start task to watch for the LOAD_TRANSLATION action', () => {
    const takeLatestDescriptor = translationDataSaga.next().value
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_TRANSLATION, getTranslation))
  })

  it('should yield until LOCATION_CHANGE action', () => {
    const takeDescriptor = translationDataSaga.next(mockedTask).value
    expect(takeDescriptor).toEqual(take(LOCATION_CHANGE))
  })
})
