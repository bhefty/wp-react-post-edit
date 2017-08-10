// Test store addons
import { browserHistory } from 'react-router-redux'
import configureStore from '../store'

describe('configureStore', () => {
  let store

  beforeAll(() => {
    store = configureStore({}, browserHistory)
  })

  describe('runSaga', () => {
    it('should contain a hook for `sagaMiddleware.run`', () => {
      expect(typeof store.runSaga).toBe('function')
    })
  })
})
