import React from 'react'
import { shallow } from 'enzyme'

import SaveButton from '../index'

describe('<SaveButton />', () => {
  it('should contain a <button> tag', () => {
    const renderedComponent = shallow(<SaveButton />)
    expect(renderedComponent.find('button').length).toEqual(1)
  })

  it('should contain a <svg> element', () => {
    const renderedComponent = shallow(<SaveButton />)
    expect(renderedComponent.find('svg').length).toEqual(1)
  })
})
