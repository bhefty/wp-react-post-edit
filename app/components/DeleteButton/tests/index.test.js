import React from 'react'
import { shallow } from 'enzyme'

import DeleteButton from '../index'

describe('<DeleteButton />', () => {
  it('should contain a <button> tag', () => {
    const renderedComponent = shallow(<DeleteButton />)
    expect(renderedComponent.find('button').length).toEqual(1)
  })

  it('should contain a <svg> element', () => {
    const renderedComponent = shallow(<DeleteButton />)
    expect(renderedComponent.find('svg').length).toEqual(1)
  })
})
