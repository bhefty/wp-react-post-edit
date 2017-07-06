/**
 * These are the pages that you can navigate to.
 * They are all wrapped in the App component, which should contain the navbar/footer/etc
 *
 * Code splitting example from:
 * https://gist.github.com/acdlite/a68433004f9d6b4cbc83b5cc3990c194
 */
import React, { Component } from 'react'
import { ConnectedRouter as Router } from 'react-router-redux'
import { Route, Switch } from 'react-router-dom'
import { getAsyncInjectors } from './utils/asyncInjectors'
import App from 'containers/App'

const asyncComponent = (reducerData, getComponent) => {
  return class AsyncComponent extends Component {
    static Component = null
    state = { Component: AsyncComponent.Component }

    componentWillMount = () => {
      if (!this.state.Component) {
        if (reducerData) {
          const injectReducer = reducerData.injectReducer
          const reducerName = reducerData.name
          const getReducer = reducerData.reducer

          if (injectReducer) {
            getReducer().then((reducer) => injectReducer(reducerName, reducer.default))
          }

          const injectSagas = reducerData.injectSagas || false
          const getSagas = reducerData.saga || false

          if (injectSagas) {
            getSagas().then((sagas) => injectSagas(sagas.default))
          }
        }
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

  // const NextPage = () => <h2>Next page</h2>

  const routes = [
    {
      exact: true,
      path: '/',
      component: HomePage
    },
    {
      path: '/next',
      component: NotFoundPage
    },
    {
      path: '*',
      component: NotFoundPage
    }
  ]

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
