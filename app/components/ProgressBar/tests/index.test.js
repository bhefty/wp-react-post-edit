import React from 'react'
import { mount } from 'enzyme'
import sinon from 'sinon'

import withProgressBar from '../index'
import ProgressBar from '../ProgressBar'

let clock = null

describe('withProgressBar()', () => {
  beforeEach(() => {
    clock = sinon.useFakeTimers()
  })

  afterEach(() => {
    clock.restore()
  })

  const Component = () => (<div></div>) // eslint-disable-line

  const router = {
    listenBefore: () => (() => {}) // eslint-disable-line
  }

  const HocComponent = withProgressBar(Component)

  it('should exist', () => {
    const renderedComponent = mount(
      <HocComponent />
    )
    expect(renderedComponent.find(Component).length).toBe(1)
  })

  it('should render <ProgressBar />', () => {
    const renderedComponent = mount(
      <HocComponent />
    )
    expect(renderedComponent.find(ProgressBar).length).toBe(1)
  })

  it('should initially have state.progress = -1', () => {
    const renderedComponent = mount(
      <HocComponent />
    )
    expect(renderedComponent.state().progress).toBe(-1)
  })

  it('should initially have state.loadedRoutes = current route', () => {
    const renderedComponent = mount(
      <HocComponent location={{ pathname: '/' }} />
    )
    expect(renderedComponent.state().loadedRoutes[0]).toBe('/')
  })

  it('should listen to route changes', () => {
    const renderedComponent = mount(
      <HocComponent location={{ pathname: '/' }} router={router} />
    )
    const inst = renderedComponent.instance()
    expect(inst.unsubscribeHistory).toBeTruthy()
  })

  it('should unset listener when mounted', () => {
    const renderedComponent = mount(
      <HocComponent location={{ pathname: '/' }} router={router} />
    )
    const inst = renderedComponent.instance()
    inst.componentWillUnmount()
    expect(inst.unsubscribeHistory).toBeFalsy()
  })

  it('should update state.progress when updateProgress() is called', () => {
    const renderedComponent = mount(
      <HocComponent location={{ pathname: '/' }} router={router} />
    )
    const inst = renderedComponent.instance()
    inst.updateProgress(10)
    expect(renderedComponent.state().progress).toBe(10)
  })

  it('should start progress bar for a new route', () => {
    const renderedComponent = mount(
      <HocComponent location={{ pathname: '/' }} router={router} />
    )
    renderedComponent.setState({ loadedRoutes: [], progress: 10 })
    renderedComponent.setProps({ location: { pathname: '/abc' }, router })
    clock.tick(10)
    expect(renderedComponent.state().progress).toBe(100)
  })
})
