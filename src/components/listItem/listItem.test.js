import React from 'react'
import { findByTestAttr, checkProps } from '../../../utils/utils'
import { shallow } from 'enzyme'
import ListItem from './ListItem'

describe('ListItem', () => {
  describe('Checking PropTypes', () => {
    it('should be rendered', () => {
      const expectedProps = {
        title: 'Test title',
        desc: 'Test desc',
      }

      const propsError = checkProps(ListItem, expectedProps)
      expect(propsError).toBeUndefined()
    })
  })

  describe('Renders', () => {
    let wrapper

    beforeEach(() => {
      const props = {
        title: 'Test render title',
        desc: 'Test render desc',
      }

      wrapper = shallow(<ListItem {...props} />)
    })

    it('should render a listItem', () => {
      const component = findByTestAttr(wrapper, 'listItemComponent')
      expect(component.length).toBe(1)
    })

    it('should render a title', () => {
      const title = findByTestAttr(wrapper, 'titleComponent')
      expect(title.length).toBe(1)
    })

    it('should render a desc', () => {
      const desc = findByTestAttr(wrapper, 'descComponent')
      expect(desc.length).toBe(1)
    })
  })

  describe('should not rendered', () => {
    let wrapper

    beforeEach(() => {
      const props = {
        desc: 'Test render desc',
      }

      wrapper = shallow(<ListItem {...props} />)
    })

    it('should NOT render a listItem', () => {
      const component = findByTestAttr(wrapper, 'listItemComponent')
      expect(component.length).toBe(0)
    })
  })
})
