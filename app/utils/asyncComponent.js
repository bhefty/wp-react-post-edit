import React, { Component } from 'react'

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
          const getSagas = reducerData.sagas || false

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

export default asyncComponent
