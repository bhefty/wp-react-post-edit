import { createSelector } from 'reselect'

const selectHome = state => state.get('home')

const makeSelectLoading = () => createSelector(
  selectHome,
  (homeState) => homeState.get('loading')
)

const makeSelectError = () => createSelector(
  selectHome,
  (homeState) => homeState.get('error')
)

const makeSelectId = () => createSelector(
  selectHome,
  (homeState) => homeState.get('id')
)

const makeSelectRecentPosts = () => createSelector(
  selectHome,
  (homeState) => homeState.getIn(['recentPostsData', 'recentPosts'])
)

const makeSelectEditText = () => createSelector(
  selectHome,
  (homeState) => homeState.getIn(['titleData', 'text'])
)

export {
  selectHome,
  makeSelectLoading,
  makeSelectError,
  makeSelectId,
  makeSelectRecentPosts,
  makeSelectEditText
}
