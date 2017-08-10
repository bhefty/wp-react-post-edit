/**
 * Create store with async loaded reducers
 */

import { createStore, applyMiddleware, compose } from 'redux'
import { fromJS } from 'immutable'
import createSagaMiddleware from 'redux-saga'
import createReducer from './reducers'

import homeSagas from 'containers/HomePage/sagas'

const sagaMiddleware = createSagaMiddleware()

/* istanbul ignore next */
const configureStore = (initialState = {}) => {
  const middlewares = [
    sagaMiddleware
  ]

  const enhancers = [
    applyMiddleware(...middlewares)
  ]

  // If Redux Devtools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle, operator-linebreak */
  /* istanbul ignore next */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
  /* eslint-enable */

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeEnhancers(...enhancers)
  )

  sagaMiddleware.run(homeSagas)
  // Extensions
  store.runSaga = sagaMiddleware.run

  // Make reducers hot reloadable
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      import('./reducers').then(reducerModule => {
        const createReducers = reducerModule.default
        const nextReducers = createReducers(store.asyncReducers)

        store.replaceReducer(nextReducers)
      })
    })
  }

  return store
}

export default configureStore
