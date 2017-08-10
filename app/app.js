/**
 * app.js
 * This is the entry file for the application.
 */
// Needed for redux-saga es6 generator support
import 'babel-polyfill'

// Import third party modules
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import FontFaceObserver from 'fontfaceobserver'
import 'sanitize.css/sanitize.css'

// Load the favicon, the manifest.json file and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions, import/no-webpack-loader-syntax */
import '!file-loader?name=[name].[ext]!./favicon.ico'
import '!file-loader?name=[name].[ext]!./manifest.json'
import 'file-loader?name=[name].[ext]!./.htaccess'
/* eslint-enable import/no-unresolved, import/extensions */

import configureStore from './store'

// Import CSS reset and Global Styles
import './global-styles'
import 'mini.css/dist/mini-nord.min.css'

// Import routes
import RouteConfig from './routes'

// Observer loading of Open Sans
const openSansObserver = new FontFaceObserver('Open Sans', {})

// When Open Sans is loaded, add a front-family using Open Sans to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded')
}, () => {
  document.body.classList.remove('fontLoaded')
})

// Create redux store with history
const history = createHistory()
const initialState = {}
const store = configureStore(initialState, history)

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <RouteConfig store={store} history={history} />
    </Provider>,
    document.getElementById('wp-react-post-editor')
  )
}
render()

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install() // eslint-disable-line global-require
}
