import { combineReducers } from 'redux-immutable'
import { routerReducer as routing } from 'react-router-redux'

import globalReducer from 'containers/App/reducer'
// import homeReducer from 'containers/HomePage/reducer'

// Creates main reducer with async loaded ones
export default function createReducer (asyncReducers) {
  return combineReducers({
    routing,
    global: globalReducer,
    // home: homeReducer,
    ...asyncReducers
  })
}
