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

import App from 'containers/App'
import HomePage from 'containers/HomePage'

import configureStore from './store'

// Create redux store with history
const history = createHistory()
const initialState = {}
const store = configureStore(initialState, history)

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App>
        <HomePage />
      </App>
    </Provider>,
    document.getElementById('wp-react-post-editor')
  )
}
render()
