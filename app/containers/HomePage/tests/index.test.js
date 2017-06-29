/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import HomePage from '../index'

describe('<HomePage />', () => {
  it('should render the page', () => {
    const tree = renderer.create(
      <HomePage />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should set state of input based on input value entered', () => {
    const component = renderer.create(
      <HomePage />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    // manually trigger onChange handler
    const e = { target: { value: 'test value' } }
    tree.children[0].props.onChange(e)

    // re-render
    tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
