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

const makeSelectRecentPosts = () => createSelector(
  selectHome,
  (homeState) => homeState.getIn(['recentPostsData', 'recentPosts'])
)

const makeSelectPostToDelete = () => createSelector(
  selectHome,
  (homeState) => {
    return homeState.getIn(['deletePostData', 'deletePostID'])
  }
)

export {
  selectHome,
  makeSelectLoading,
  makeSelectError,
  makeSelectRecentPosts,
  makeSelectPostToDelete
}
