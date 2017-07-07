import React, { PureComponent } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'

import withProgressBar from 'components/ProgressBar'

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
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
        <Helmet
          titleTemplate='%s - React.js Boilerplate'
          defaultTitle='React.js Boilerplate'
          meta={[
            { name: 'description', content: 'A React.js Boierlplate application with Redux' }
          ]}
        />
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/next'>Next</Link></li>
        </ul>
        {React.Children.toArray(this.props.children)}
      </AppWrapper>
    )
  }
}

export default withRouter(withProgressBar(App))
