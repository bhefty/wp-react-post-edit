import React from 'react'
import { shallow } from 'enzyme'

import Percent from '../Percent'

describe('<Percent />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<Percent />)
    expect(renderedComponent.type()).toEqual('div')
  })

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<Percent />)
    expect(renderedComponent.prop('className')).toBeDefined()
  })

  it('should adopt a valid attribute', () => {
    const id = 'test'
    const renderedComponent = shallow(<Percent id={id} />)
    expect(renderedComponent.prop('id')).toEqual(id)
  })

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Percent attribute={'test'} />)
    expect(renderedComponent.prop('attribute')).toBeUndefined()
  })
})
