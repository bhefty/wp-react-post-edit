/**
 * These are the pages that you can navigate to.
 * They are all wrapped in the App component, which should contain the navbar/footer/etc
 *
 * Code splitting example from:
 * https://gist.github.com/acdlite/a68433004f9d6b4cbc83b5cc3990c194
 */
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { getAsyncInjectors } from 'utils/asyncInjectors'
import App from 'containers/App'

const asyncComponent = (getComponent) => {
  return class AsyncComponent extends Component {
    static Component = null
    state = { Component: AsyncComponent.Component }

    componentWillMount = () => {
      if (!this.state.Component) {
        getComponent().then(({ default: Component }) => {
          AsyncComponent.Component = Component
          this.setState({ Component })
        })
      }
    }

    render () {
      const { Component } = this.state
      if (Component) {
        return <Component {...this.props} />
      }
      return null
    }
  }
}

const HomePage = asyncComponent(() => import('containers/HomePage'))
const NotFoundPage = asyncComponent(() => import('containers/NotFoundPage'))

const NextPage = () => <h2>Next Page</h2>

const routes = [
  {
    exact: true,
    path: '/',
    component: HomePage
  },
  {
    path: '/next',
    component: NextPage
  },
  {
    path: '*',
    component: NotFoundPage
  }
]

const RouteWithSubRoutes = (route) => (
  <Route exact={route.exact} path={route.path} render={props => (
    <route.component {...props} routes={route.routes} />
  )} />
)

const RouteConfig = (props) => {
  const { injectReducer, injectSagas } = getAsyncInjectors(props.store) // eslint-disable-line no-unused-vars

  return (
    <Router history={props.history}>
      <App>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </App>
    </Router>
  )
}

export default RouteConfig
