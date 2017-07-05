/**
 * app.js
 * This is the entry file for the application.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'

// import { makeSelectLocationState } from 'containers/App/selectors'

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
// import createRoutes from './routes'
import RouteConfig from './routes'
// const childRoutes = createRoutes()

// Create redux store with history
const history = createHistory()
const initialState = {}
const store = configureStore(initialState, history)

// const history = syncHistoryWithStore(browserHistory, store, {
//   selectLocationState: makeSelectLocationState()
// })

// Set up the router, wrapping all Routes in the App component
// const rootRoute = {
//   component: App,
//   childRoutes: createRoutes(store)
// }

// const render = () => {
//   ReactDOM.render(
//     <Provider store={store}>
//       <Router
//         history={history}
//         routes={rootRoute}
//         // render={} // TODO: Add scroll to top with reac-router v4
//       />
//     </Provider>,
//     document.getElementById('app')
//   )
// }

// const routes = [
//   {
//     path: '/',
//     component: NotFoundPage
//   }
// ]

// const RouteWithSubRoutes = (route) => (
//   <Route path={route.path} render={props => (
//     <route.component {...props} routes={route.routes} />
//   )} />
// )

// const RouteConfig = () => (
//   <Router>
//     <div>
//       {routes.map((route, i) => (
//         <RouteWithSubRoutes key={i} {...route} />
//       ))}
//     </div>
//   </Router>
// )

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <RouteConfig store={store} history={history} />
    </Provider>,
    document.getElementById('app')
  )
}
// render()
if (module.hot) {
  // render()
  module.hot.accept('containers/App', () => {
    render()
  })
}

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install() // eslint-disable-line global-require
}
