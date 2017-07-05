import { createSelector } from 'reselect'

const selectHome = state => state.get('home')

const makeSelectCount = () => createSelector(
  selectHome,
  (homeState) => homeState.get('count')
)

export {
  selectHome,
  makeSelectCount
}
