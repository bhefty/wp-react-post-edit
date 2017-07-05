/* eslint-env jest */
import { fromJS } from 'immutable'

import {
  selectHome,
  makeSelectCount
} from '../selectors'

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = fromJS({
      count: 0
    })
    const mockedState = fromJS({
      home: homeState
    })
    expect(selectHome(mockedState)).toEqual(homeState)
  })
})

describe('makeSelectCount', () => {
  const countSelector = makeSelectCount()
  it('should select the count', () => {
    const mockedState = fromJS({
      home: {
        count: 0
      }
    })
    expect(countSelector(mockedState)).toEqual(0)
  })
})