import React from 'react'
import { shallow, mount } from 'enzyme'

import RecentPosts from '../index'
import LoadingIndicator from 'components/LoadingIndicator'

describe('<RecentPosts />', () => {
  it('should render the loading indicator when it is loading', () => {
    const renderedComponent = shallow(
      <RecentPosts loading />
    )
    expect(renderedComponent.contains(<LoadingIndicator />)).toEqual(true)
  })

  it('should render an error if loading failed', () => {
    const renderedComponent = mount(
      <RecentPosts
        loading={false}
        error={{ msg: 'Loading failed!' }}
      />
    )
    expect(renderedComponent.text()).toMatch(/An error occurred retreiving latests posts/)
  })

  it('should render the recent posts if loading was successful', () => {
    const recentPosts = [{ title: 'One' }, { title: 'Two' }]
    const renderedComponent = shallow(
      <RecentPosts
        recentPosts={recentPosts}
        error={false}
      />
    )
    expect(renderedComponent.contains('Post')).toEqual(true)
  })

  it('should not render anything if nothing is provided', () => {
    const renderedComponent = shallow(
      <RecentPosts
        recentPosts={false}
        error={false}
        loading={false}
      />
    )
    expect(renderedComponent.html()).toEqual(null)
  })
})
