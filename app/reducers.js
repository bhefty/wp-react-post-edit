import { combineReducers } from 'redux-immutable'
import { routerReducer as routing } from 'react-router-redux'
import { counterApp } from 'containers/HomePage/reducer'

// Creates main reducer with async loaded ones
export default function createReducer (asyncReducers) {
  return combineReducers({
    routing,
    counterApp,
    ...asyncReducers
  })
}
