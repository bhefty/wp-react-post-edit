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

  it('should call onChangeTitle', () => {
    const title = 'test'
    const postId = '1'
    const onChangeTitle = jest.fn()
    const renderedComponent = shallow(<PostItem title={title} postId={postId} onChangeTitle={onChangeTitle} />)
    const wrapper = renderedComponent.instance()
    wrapper.changeTitle({}, postId)
    expect(onChangeTitle).toBeCalled()
  })

  it('should set state of edit title to true', () => {
    const title = 'test'
    const postId = '1'
    const renderedComponent = shallow(<PostItem title={title} postId={postId} />)
    const wrapper = renderedComponent.instance()
    expect(renderedComponent.state('editingTitle')).toEqual(false)
    wrapper.editTitle()
    expect(renderedComponent.state('editingTitle')).toEqual(true)
  })

  it('should set state of editTitleText to the new value', () => {
    const title = 'test'
    const postId = '1'
    const renderedComponent = shallow(<PostItem title={title} postId={postId} />)
    const wrapper = renderedComponent.instance()
    expect(renderedComponent.state('editTitleText')).toEqual(title)
    wrapper.onEdit({
      target: {
        value: 'testing'
      }
    })
    expect(renderedComponent.state('editTitleText')).toEqual('testing')
  })

  it('should set state of edit image modal to true', () => {
    const title = 'test'
    const postId = '1'
    const renderedComponent = shallow(<PostItem title={title} postId={postId} onReloadPosts={jest.fn()} />)
    const wrapper = renderedComponent.instance()
    expect(renderedComponent.state('imageModalOpen')).toEqual(false)
    wrapper.openEditImage()
    expect(renderedComponent.state('imageModalOpen')).toEqual(true)
  })

  it('should set state of edit image modal to false', () => {
    const title = 'test'
    const postId = '1'
    const renderedComponent = shallow(<PostItem title={title} postId={postId} onReloadPosts={jest.fn()} />)
    const wrapper = renderedComponent.instance()
    wrapper.openEditImage()
    expect(renderedComponent.state('imageModalOpen')).toEqual(true)
    wrapper.closeEditImage()
    expect(renderedComponent.state('imageModalOpen')).toEqual(false)
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

    it('should call onDeletePost if user can delete', () => {
      const title = 'test'
      const postId = '1'
      const onDeletePost = jest.fn()
      const renderedComponent = shallow(<PostItem title={title} postId={postId} onDeletePost={onDeletePost} />)
      const wrapper = renderedComponent.instance()
      wrapper.openDeleteConfirmation()
      wrapper.closeDeleteConfirmation(true, postId)
      expect(onDeletePost).toBeCalled()
    })
  })
})
