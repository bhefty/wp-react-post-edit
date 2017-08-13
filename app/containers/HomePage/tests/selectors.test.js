import { fromJS } from 'immutable'

import {
  selectHome,
  makeSelectRecentPosts,
  makeSelectPostToDelete
} from '../selectors'

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = fromJS({
      count: 0
    })
    const mockedState = fromJS({
      home: homeState
    })
    expect(selectHome(mockedState)).toEqual(homeState)
  })
})

describe('makeSelectRecentPosts', () => {
  const textSelector = makeSelectRecentPosts()
  it('should select the recent posts', () => {
    const recentPosts = fromJS([])
    const mockedState = fromJS({
      home: {
        recentPostsData: {
          recentPosts
        }
      }
    })
    expect(textSelector(mockedState)).toEqual(recentPosts)
  })
})

describe('makeSelectPostToDelete', () => {
  const postSelector = makeSelectPostToDelete()
  it('should select the post id to delete', () => {
    const deletePostID = fromJS('1')
    const mockedState = fromJS({
      home: {
        deletePostData: {
          deletePostID
        }
      }
    })
    expect(postSelector(mockedState)).toEqual(deletePostID)
  })
})
