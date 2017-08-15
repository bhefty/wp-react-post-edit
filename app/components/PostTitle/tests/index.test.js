import React from 'react'
import { mount } from 'enzyme'

import PostTitle from '../index'

describe('<PostTitle />', () => {
  it('should render a form', () => {
    const renderedComponent = mount(
      <PostTitle
        handleSubmit={jest.fn()}
        handleChange={jest.fn()}
        handleEdit={jest.fn()}
        handleDelete={jest.fn()}
        editingTitle
        title='Test'
        editTitleText='Test'
      />
    )
    expect(renderedComponent.find('form').length).toEqual(1)
  })
})
