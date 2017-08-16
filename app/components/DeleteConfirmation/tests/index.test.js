import React from 'react'
import { shallow } from 'enzyme'

import DeleteConfirmation from '../index'

describe('<DeleteConfirmation />', () => {
  it('should render Modal', () => {
    const renderedComponent = shallow(
      <DeleteConfirmation isOpen />
    )
    expect(renderedComponent.find('Modal').length).toEqual(1)
  })

  it('should handle cancel button', () => {
    const closeModalMock = jest.fn()
    const onClickMock = jest.fn()
    const renderedComponent = shallow(
      <DeleteConfirmation closeModal={closeModalMock} onClick={onClickMock} />
    )
    renderedComponent.find('.btn-cancel').simulate('click')
    expect(closeModalMock).toBeCalled()
  })

  it('should handle confirm button', () => {
    const closeModalMock = jest.fn()
    const onClickMock = jest.fn()
    const renderedComponent = shallow(
      <DeleteConfirmation closeModal={closeModalMock} onClick={onClickMock} />
    )
    renderedComponent.find('.btn-confirm').simulate('click')
    expect(closeModalMock).toBeCalled()
  })
})
