import React from 'react'
import { shallow } from 'enzyme'
import { Header } from './Header'

import { findByTestAttr } from '../../../utils/utils'

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />)
  return component
}

describe('Header', () => {
  let component

  beforeEach(() => {
    component = setUp()
  })

  it('should be rendered', () => {
    const wrapper = findByTestAttr(component, 'nav')
    expect(wrapper.length).toBe(1)
  })

  it('should render a logo', () => {
    const wrapper = findByTestAttr(component, 'logo')
    expect(wrapper.length).toBe(1)
  })
})
