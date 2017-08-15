import React from 'react'
import { shallow } from 'enzyme'

import CancelButton from '../index'

describe('<CancelButton />', () => {
  it('should contain a <button> tag', () => {
    const renderedComponent = shallow(<CancelButton />)
    expect(renderedComponent.find('button').length).toEqual(1)
  })

  it('should contain a <svg> element', () => {
    const renderedComponent = shallow(<CancelButton />)
    expect(renderedComponent.find('svg').length).toEqual(1)
  })
})
