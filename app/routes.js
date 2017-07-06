/**
 * These are the pages that you can navigate to.
 * They are all wrapped in the App component, which should contain the navbar/footer/etc
 *
 * Code splitting example from:
 * https://gist.github.com/acdlite/a68433004f9d6b4cbc83b5cc3990c194
 */
import React from 'react'
import { ConnectedRouter as Router } from 'react-router-redux'
import { Route, Switch } from 'react-router-dom'
import { getAsyncInjectors } from './utils/asyncInjectors'
import asyncComponent from './utils/asyncComponent'
import App from 'containers/App'

const RouteWithSubRoutes = (route) => (
  <Route exact={route.exact} path={route.path} render={props => (
    <route.component {...props} routes={route.routes} />
  )} />
)

const RouteConfig = (props) => {
  const { injectReducer, injectSagas } = getAsyncInjectors(props.store) // eslint-disable-line no-unused-vars

  const HomePage = asyncComponent(
    {
      injectReducer,
      name: 'home',
      reducer: () => import('containers/HomePage/reducer')
    },
    () => import('containers/HomePage')
  )

  const NotFoundPage = asyncComponent(
    null,
    () => import('containers/NotFoundPage')
  )

  const routes = [{
    exact: true,
    path: '/',
    component: HomePage
  }, {
    path: '/next',
    component: NotFoundPage
  }, {
    path: '*',
    component: NotFoundPage
  }]

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
