import React from 'react'
import { mount } from 'enzyme'

import FeaturedImage from '../index'

describe('<FeaturedImage />', () => {
  const renderedComponent = mount(
    <FeaturedImage
      src='https://test.jpg'
      alt='test'
      openEditImage={jest.fn()}
    />
  )
  it('should contain an image', () => {
    expect(renderedComponent.find('Img').length).toEqual(1)
  })

  it('should contain button', () => {
    expect(renderedComponent.find('button').length).toEqual(1)
  })
})
