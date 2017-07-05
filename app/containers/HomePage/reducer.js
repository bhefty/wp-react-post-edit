import { fromJS } from 'immutable'
import * as types from './constants'

const initialState = fromJS({
  count: 0
})

export const counterApp = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return state
        .update('count', n => n + 1)
    case types.DECREMENT:
      return state
        .update('count', n => n - 1)
    default:
      return state
  }
}
