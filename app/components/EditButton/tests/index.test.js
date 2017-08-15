import React from 'react'
import { shallow } from 'enzyme'

import EditButton from '../index'

describe('<EditButton />', () => {
  it('should contain a <button> tag', () => {
    const renderedComponent = shallow(<EditButton />)
    expect(renderedComponent.find('button').length).toEqual(1)
  })

  it('should contain a <svg> element', () => {
    const renderedComponent = shallow(<EditButton />)
    expect(renderedComponent.find('svg').length).toEqual(1)
  })
})
