/**
 * app.js
 * This is the entry file for the application.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router, browserHistory, syncHistoryWithStore } from 'react-router-redux'

// Import root app
import App from 'containers/App'

import { makeSelectLocationState } from 'containers/App/selectors'

// Load the favicon, the manifest.json file and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions, import/no-webpack-loader-syntax */
import '!file-loader?name=[name].[ext]!./favicon.ico'
import '!file-loader?name=[name].[ext]!./manifest.json'
import 'file-loader?name=[name].[ext]!./.htaccess'
/* eslint-enable import/no-unresolved, import/extensions */

import configureStore from './store'

// Import CSS reset and Global Styles
import './global-styles'

// Import root routes
import createRoutes from './routes'

// Create redux store with history
const initialState = {}
const store = configureStore(initialState, browserHistory)

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: makeSelectLocationState()
})

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
