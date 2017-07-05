import { combineReducers } from 'redux-immutable'
// import { fromJS } from 'immutable'
import { routerReducer as routing } from 'react-router-redux'
import { counterApp } from 'containers/HomePage/reducer'

// Merge route location changes into immutable state
// const routeInitialState = fromJS({
//   locationBeforeTransitions: null
// })

// function routeReducer (state = routeInitialState, action) {
//   switch (action.type) {
//     /* istanbul ignore next */
//     case LOCATION_CHANGE:
//       return state.merge({
//         locationBeforeTransitions: action.payload
//       })
//     default:
//       return state
//   }
// }

// Creates main reducer with async loaded ones
export default function createReducer (asyncReducers) {
  return combineReducers({
    routing,
    counterApp,
    ...asyncReducers
  })
}
