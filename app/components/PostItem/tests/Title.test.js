import React from 'react'
import { shallow } from 'enzyme'

import Title from '../Title'

describe('<Title />', () => {
  it('should render an <input> tag', () => {
    const renderedComponent = shallow(<Title />)
    expect(renderedComponent.type()).toEqual('input')
  })

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<Title />)
    expect(renderedComponent.prop('className')).toBeDefined()
  })

  it('should adopt a valid attribute', () => {
    const id = 'test'
    const renderedComponent = shallow(<Title id={id} />)
    expect(renderedComponent.prop('id')).toEqual(id)
  })

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Title attribute={'test'} />)
    expect(renderedComponent.prop('attribute')).toBeUndefined()
  })
})
