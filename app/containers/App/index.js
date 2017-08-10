import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// import Header from 'components/Header'
// import Footer from 'components/Footer'

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: calc(100vh - 172px); // min height for App wrapper should account for nav and footer
  padding: 0 16px;
  flex-direction: column;
`

export class App extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render () {
    return (
      <AppWrapper>
        {React.Children.toArray(this.props.children)}
      </AppWrapper>
    )
  }
}

export default App
