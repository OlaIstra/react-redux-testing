import React from 'react'
import { shallow } from 'enzyme'
import Headline from './Headline'

import { findByTestAttr, checkProps } from '../../../utils/utils'

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />)
  return component
}

describe('Headline', () => {
  describe('Have props', () => {
    let wrapper

    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Test Desc',
      }
      wrapper = setUp(props)
    })

    it('should be rendered', () => {
      const component = findByTestAttr(wrapper, 'headline')
      expect(component.length).toBe(1)
    })

    it('should render H1', () => {
      const h1 = findByTestAttr(wrapper, 'header')
      expect(h1.length).toBe(1)
    })

    it('should render P', () => {
      const desc = findByTestAttr(wrapper, 'desc')
      expect(desc.length).toBe(1)
    })
  })

  describe('Have NO props', () => {
    let wrapper

    beforeEach(() => {
      wrapper = setUp()
    })

    it('should NOT rendered', () => {
      const component = findByTestAttr(wrapper, 'headline')
      expect(component.length).toBe(0)
    })
  })

  describe('Checking PropTypes', () => {
    it('should not throw a warning', () => {
      const expectedProps = {
        header: 'Test Header',
        desc: 'Test Desc',
        tempArr: [{ fName: 'Test Name', age: 1, onlineStatus: false }],
      }
      const propsErr = checkProps(Headline, expectedProps)
      expect(propsErr).toBeUndefined()
    })
  })
})
