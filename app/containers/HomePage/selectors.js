import { createSelector } from 'reselect'

const selectHome = state => state.get('home')

const makeSelectRecentPosts = () => createSelector(
  selectHome,
  (homeState) => homeState.getIn(['recentPostsData', 'recentPosts'])
)

export {
  selectHome,
  makeSelectRecentPosts
}
