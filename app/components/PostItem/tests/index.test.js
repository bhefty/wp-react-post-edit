import React from 'react'
import { shallow, mount } from 'enzyme'

import PostItem from '../index'

describe('<PostItem />', () => {
  it('should render an input field', () => {
    const title = 'test'
    const postId = '1'
    const renderedComponent = mount(
      <PostItem title={title} postId={postId} />
    )
    expect(renderedComponent.find('input').length).toEqual(1)
  })

  it('should handle opening delete modal', () => {
    const title = 'test'
    const postId = '1'
    const renderedComponent = shallow(<PostItem title={title} postId={postId} />)
    const wrapper = renderedComponent.instance()
    expect(renderedComponent.state('deleteModalOpen')).toEqual(false)
    wrapper.openDeleteConfirmation()
    expect(renderedComponent.state('deleteModalOpen')).toEqual(true)
  })

  describe('DeleteConfirmation', () => {
    it('should handle closing delete modal', () => {
      const title = 'test'
      const postId = '1'
      const renderedComponent = shallow(<PostItem title={title} postId={postId} />)
      const wrapper = renderedComponent.instance()
      expect(renderedComponent.state('deleteModalOpen')).toEqual(false)
      wrapper.openDeleteConfirmation()
      expect(renderedComponent.state('deleteModalOpen')).toEqual(true)
      wrapper.closeDeleteConfirmation()
      expect(renderedComponent.state('deleteModalOpen')).toEqual(false)
    })
  })
})
