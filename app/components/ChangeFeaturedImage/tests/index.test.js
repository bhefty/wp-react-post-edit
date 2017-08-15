import React from 'react'
import { shallow } from 'enzyme'

import ChangeFeaturedImage from '../index'

describe('<ChangeFeaturedImage />', () => {
  const renderedComponent = shallow(
    <ChangeFeaturedImage isOpen />
  )
  it('should render Modal', () => {
    expect(renderedComponent.find('Modal').length).toEqual(1)
  })
})
