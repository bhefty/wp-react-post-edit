/**
 * app.js
 * This is the entry file for the application.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

// Import root app
import App from 'containers/App'

// TODO: load favicon/manifest.json/htaccess ???

import configureStore from './store'

// Import CSS reset and Global Styles
import './global-styles'

// Import root routes
import createRoutes from './routes'

const history = createHistory()

// Create redux store with history
const initialState = {}
const store = configureStore(initialState, history)

// Set up the router, wrapping all Routes in the App component
const rootRoute = {
  component: App,
  childRoutes: createRoutes(store)
}

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router
        history={history}
        routes={rootRoute}
        // render={} // TODO: Add scroll to top with reac-router v4
      />
    </Provider>,
    document.getElementById('app')
  )
}

if (module.hot) {
  module.hot.accept('containers/App', () => {
    render()
  })
}

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install() // eslint-disable-line global-require
}
