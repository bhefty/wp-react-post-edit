import React from 'react'
import renderer from 'react-test-renderer'

import { HomePage, mapDispatchToProps } from '../index'
import { increment, decrement } from '../actions'

describe('<HomePage />', () => {
  it('should render the page', () => {
    const tree = renderer.create(
      <HomePage />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  describe('mapDispatchToProps', () => {
    describe('onIncrement', () => {
      it('should be injected', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        expect(result.onIncrement).toBeDefined()
      })

      it('should dispatch increment when called', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        result.onIncrement()
        expect(dispatch).toHaveBeenCalledWith(increment())
      })
    })

    describe('onDecrement', () => {
      it('should be injected', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        expect(result.onDecrement).toBeDefined()
      })

      it('should dispatch decrement when called', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        result.onDecrement()
        expect(dispatch).toHaveBeenCalledWith(decrement())
      })
    })
  })
})
