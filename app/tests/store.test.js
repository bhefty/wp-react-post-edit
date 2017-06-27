/* eslint-env jest */
// Test store addons
import configureStore from '../store'
import createHistory from 'history/createBrowserHistory'
const history = createHistory()

describe('configureStore', () => {
  let store

  beforeAll(() => {
    store = configureStore({}, history)
  })

  describe('asyncReducers', () => {
    it('should contain an object for async reducers', () => {
      expect(typeof store.asyncReducers).toBe('object')
    })
  })

  describe('runSaga', () => {
    it('should contain a hook for `sagaMiddleware.run`', () => {
      expect(typeof store.runSaga).toBe('function')
    })
  })
})
