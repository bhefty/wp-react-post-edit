import React, { PureComponent } from 'react'

import A from 'components/A'
import Wrapper from './Wrapper'

class Footer extends PureComponent {
  render () {
    return (
      <Wrapper>
        <section>
          Made by <A href='https://billhefty.com/' target='_blank'>Bill Hefty</A>
        </section>
      </Wrapper>
    )
  }
}

export default Footer
