import React from 'react'
import { shallow } from 'enzyme'

import DeleteConfirmation from '../index'

describe('<DeleteConfirmation />', () => {
  const renderedComponent = shallow(
    <DeleteConfirmation isOpen />
  )
  it('should render Modal', () => {
    expect(renderedComponent.find('Modal').length).toEqual(1)
  })
})
