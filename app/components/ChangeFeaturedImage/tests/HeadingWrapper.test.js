import React from 'react'
import { shallow } from 'enzyme'

import HeadingWrapper from '../HeadingWrapper'

describe('<HeadingWrapper />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<HeadingWrapper />)
    expect(renderedComponent.type()).toEqual('div')
  })

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<HeadingWrapper />)
    expect(renderedComponent.prop('className')).toBeDefined()
  })

  it('should adopt a valid attribute', () => {
    const id = 'test'
    const renderedComponent = shallow(<HeadingWrapper id={id} />)
    expect(renderedComponent.prop('id')).toEqual(id)
  })

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<HeadingWrapper attribute={'test'} />)
    expect(renderedComponent.prop('attribute')).toBeUndefined()
  })
})
