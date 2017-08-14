import React from 'react'
import { shallow } from 'enzyme'

import { HomePage, mapDispatchToProps } from '../index'
import { loadRecentPosts, deletePost, editTitle } from '../actions'

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

    describe('onDeletePost', () => {
      it('should be injected', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        expect(result.onDeletePost).toBeDefined()
      })

      it('should dispatch deletePost when called', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        result.onDeletePost()
        expect(dispatch).toHaveBeenCalledWith(deletePost())
      })
    })

    describe('onChangeTitle', () => {
      it('should be injected', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        expect(result.onChangeTitle).toBeDefined()
      })

      it('should dispatch editTitle when called', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        result.onChangeTitle()
        expect(dispatch).toHaveBeenCalledWith(editTitle())
      })
    })
  })
})
