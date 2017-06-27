/**
 * Create store with async loaded reducers
 */

import { createStore, applyMiddleware, compose } from 'redux'
import { fromJS } from 'immutable'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import createReducer from './reducers'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore (initialState = {}, history) {
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history)
  ]

  const enhancers = [
    applyMiddleware(...middlewares)
  ]

  // If Redux Devtools Extension is installed uuse it, otherwise use Redux compose
  /* eslint-disable operator-linebreak */
  const composeEnhancer =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
  /* eslint-enable */

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeEnhancer(...enhancers)
  )

  // Extensions
  store.runSaga = sagaMiddleware.run
  store.asyncReducers = {} // Async reducer registry

  // Make reducers hot reloadable
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
