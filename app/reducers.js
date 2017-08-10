import { combineReducers } from 'redux-immutable'

import globalReducer from 'containers/App/reducer'
import homeReducer from 'containers/HomePage/reducer'

// Creates main reducer with async loaded ones
export default function createReducer () {
  return combineReducers({
    global: globalReducer,
    home: homeReducer
  })
}
