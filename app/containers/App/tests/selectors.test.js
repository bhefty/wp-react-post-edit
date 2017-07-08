import { fromJS } from 'immutable'

import {
  selectGlobal,
  makeSelectCurrentText,
  makeSelectLoading,
  makeSelectError,
  makeSelectTranslation,
  makeSelectLocationState
} from '../selectors'

describe('selectGlobal', () => {
  it('should select the global state', () => {
    const globalState = fromJS({})
    const mockedState = fromJS({
      global: globalState
    })
    expect(selectGlobal(mockedState)).toEqual(globalState)
  })
})

describe('makeSelectCurrentText', () => {
  const currentTextSelector = makeSelectCurrentText()
  it('should select the current text', () => {
    const text = 'we will translate this'
    const mockedState = fromJS({
      global: {
        currentText: text
      }
    })
    expect(currentTextSelector(mockedState)).toEqual(text)
  })
})

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading()
  it('should select the loading', () => {
    const loading = false
    const mockedState = fromJS({
      global: {
        loading
      }
    })
    expect(loadingSelector(mockedState)).toEqual(loading)
  })
})

describe('makeSelectError', () => {
  const errorSelector = makeSelectError()
  it('should select the error', () => {
    const error = 404
    const mockedState = fromJS({
      global: {
        error
      }
    })
    expect(errorSelector(mockedState)).toEqual(error)
  })
})

describe('makeSelectTranslation', () => {
  const translationSelector = makeSelectTranslation()
  const translation = fromJS([])
  const mockedState = fromJS({
    global: {
      translationData: {
        translation
      }
    }
  })
  expect(translationSelector(mockedState)).toEqual(translation)
})

describe('makeSelectLocationState', () => {
  const locationStateSelector = makeSelectLocationState()
  it('should select the route as a plain JS object', () => {
    const route = fromJS({
      locationBeforeTransitions: null
    })
    const mockedState = fromJS({
      route
    })
    expect(locationStateSelector(mockedState)).toEqual(route.toJS())
  })

  it('should set the prevRoutingState when changed', () => {
    const route = fromJS({
      locationBeforeTransitions: null
    })
    const mockedState = fromJS({
      route
    })
    expect(locationStateSelector(mockedState)).toEqual(route.toJS())

    route.set('locationBeforeTransitions', '/about')
    expect(locationStateSelector(mockedState)).toEqual(route.toJS())
  })
})
