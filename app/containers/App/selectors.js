import { createSelector } from 'reselect'

const selectGlobal = state => state.get('global')

const makeSelectCurrentText = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentText')
)

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
)

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
)

const makeSelectTranslation = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['translationData', 'translation'])
)

const makeSelectLocationState = () => {
  let prevRoutingState
  let prevRoutingStateJS

  return (state) => {
    const routingState = state.get('route')

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState
      prevRoutingStateJS = routingState.toJS()
    }

    return prevRoutingStateJS
  }
}

export {
  selectGlobal,
  makeSelectCurrentText,
  makeSelectLoading,
  makeSelectError,
  makeSelectTranslation,
  makeSelectLocationState
}
