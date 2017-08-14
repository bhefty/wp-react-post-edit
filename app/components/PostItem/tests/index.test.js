import React from 'react'
import { mount } from 'enzyme'

import PostItem from '../index'

describe('<PostItem />', () => {
  it('should render an input field', () => {
    const title = 'test'
    const text = 'test'
    const postId = '1'
    const renderedComponent = mount(
      <PostItem title={title} postId={postId} text={text} />
    )
    expect(renderedComponent.find('input').length).toEqual(1)
  })
})
