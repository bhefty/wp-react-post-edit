import React from 'react'
import { shallow } from 'enzyme'

import { HomePage, mapDispatchToProps } from '../index'
import { loadRecentPosts } from '../actions'

describe('<HomePage />', () => {
  it('should render to the page', () => {
    const renderedComponent = shallow(<HomePage />)
    expect(renderedComponent.find('div').length).toBeGreaterThan(0)
  })

  describe('mapDispatchToProps', () => {
    describe('onLoadRecentPosts', () => {
      it('should be injected', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        expect(result.onLoadRecentPosts).toBeDefined()
      })

      it('should dispatch loadRecentPosts when called', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        result.onLoadRecentPosts()
        expect(dispatch).toHaveBeenCalledWith(loadRecentPosts())
      })
    })
  })
})
