import { fromJS } from 'immutable'

import {
  selectHome,
  makeSelectLoading,
  makeSelectError,
  makeSelectRecentPosts,
  makeSelectId,
  makeSelectEditText
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

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading()
  it('should select loading', () => {
    const loading = fromJS(false)
    const mockedState = fromJS({
      home: {
        loading
      }
    })
    expect(loadingSelector(mockedState)).toEqual(loading)
  })
})

describe('makeSelectError', () => {
  const errorSelector = makeSelectError()
  it('should select error', () => {
    const error = fromJS('Error occurred')
    const mockedState = fromJS({
      home: {
        error
      }
    })
    expect(errorSelector(mockedState)).toEqual(error)
  })
})

describe('makeSelectId', () => {
  const postSelector = makeSelectId()
  it('should select the post id', () => {
    const id = fromJS('1')
    const mockedState = fromJS({
      home: {
        id
      }
    })
    expect(postSelector(mockedState)).toEqual(id)
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

describe('makeSelectEditText', () => {
  const textSelector = makeSelectEditText()
  it('should select the recent posts', () => {
    const text = fromJS('Test text')
    const mockedState = fromJS({
      home: {
        titleData: {
          text
        }
      }
    })
    expect(textSelector(mockedState)).toEqual(text)
  })
})
