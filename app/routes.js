/**
 * These are the pages that you can navigate to.
 * They are all wrapped in the App component, which should contain the navbar/footer/etc
 */
import { getAsyncInjectors } from 'utils/asyncInjectors'

const errorLoading = err => {
  console.error('Dynamic page loading failed', err) // eslint-disable-line no-console
}

const loadModule = cb => componentModule => {
  cb(null, componentModule.default)
}

export default function createRoutes (store) {
  const { injectReducer, injectSagas } = getAsyncInjectors(store) // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent (nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage')
        ])

        const renderRoute = loadModule(cb)

        importModules.then(([component]) => {
          renderRoute(component)
        })

        importModules.catch(errorLoading)
      }
    },
    {
      path: '*',
      name: 'notfound',
      getComponent (nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading)
      }
    }
  ]
}
