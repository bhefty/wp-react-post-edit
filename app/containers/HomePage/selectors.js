import { createSelector } from 'reselect'

const selectHome = state => state.get('home')

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
  makeSelectRecentPosts,
  makeSelectPostToDelete
}
