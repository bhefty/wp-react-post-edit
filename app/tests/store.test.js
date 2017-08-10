// Test store addons
import configureStore from '../store'

describe('configureStore', () => {
  let store

  beforeAll(() => {
    store = configureStore({})
  })

  describe('runSaga', () => {
    it('should contain a hook for `sagaMiddleware.run`', () => {
      expect(typeof store.runSaga).toBe('function')
    })
  })
})
