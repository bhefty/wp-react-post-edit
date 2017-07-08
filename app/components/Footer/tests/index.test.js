import React from 'react'
import { shallow } from 'enzyme'

import A from 'components/A'
import Footer from '../index'

describe('<Footer />', () => {
  it('should render the credits', () => {
    const renderedComponent = shallow(<Footer />)
    expect(renderedComponent.contains(
      <section>
        Made by <A href='https://billhefty.com/' target='_blank'>Bill Hefty</A>
      </section>
    )).toBe(true)
  })
})
