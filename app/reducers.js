import { fromJS } from 'immutable'
import { combineReducers } from 'redux-immutable'
import { LOCATION_CHANGE } from 'react-router-redux'

import globalReducer from 'containers/App/reducer'
import homeReducer from 'containers/HomePage/reducer'

const routeInitialState = fromJS({
  locationBeforeTransitions: null
})

function routeReducer (state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload
      })
    default:
      return state
  }
}

// Creates main reducer with async loaded ones
export default function createReducer () {
  return combineReducers({
    route: routeReducer,
    global: globalReducer,
    home: homeReducer
  })
}
