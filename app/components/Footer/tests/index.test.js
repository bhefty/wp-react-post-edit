/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import Footer from '../index'

describe('<Footer />', () => {
  it('should render the page', () => {
    const tree = renderer.create(
      <Footer />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
