import React from 'react'
import renderer from 'react-test-renderer'
import App from '../App'

describe('App snapshot', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <App />
    ).toJSON()
    expect(component).toMatchSnapshot()
  })
})
