import { combineReducers } from 'redux-immutable'
import { fromJS } from 'immutable'
import { LOCATION_CHANGE } from 'react-router-redux'

// Merge route location changes into immutable state
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
export default function createReducer (asyncReducers) {
  return combineReducers({
    route: routeReducer,
    ...asyncReducers
  })
}