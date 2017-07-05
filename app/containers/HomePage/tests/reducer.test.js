/* eslint-env jest */
import { fromJS } from 'immutable'

import homeReducer from '../reducer'

import {
  increment,
  decrement
} from '../actions'

describe('homeReducer', () => {
  let state
  beforeEach(() => {
    state = fromJS({
      count: 0
    })
  })

  it('should return the initial state', () => {
    const expectedResult = state
    expect(homeReducer(undefined, {})).toEqual(expectedResult)
  })

  it('should handle the increment action correctly', () => {
    const expectedResult = state.update('count', n => n + 1)
    expect(homeReducer(state, increment())).toEqual(expectedResult)
  })

  it('should handle the decrement action correctly', () => {
    const expectedResult = state.update('count', n => n - 1)
    expect(homeReducer(state, decrement())).toEqual(expectedResult)
  })
})
