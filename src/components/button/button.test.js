import React from 'react'
import { findByTestAttr, checkProps } from '../../../utils/utils'
import { shallow } from 'enzyme'
import LoadButton from './Button'

describe('LoadButton', () => {
  describe('Checking PropTypes', () => {
    it('should be rendered', () => {
      const expectedProps = {
        buttonText: 'Test text',
        emitEvent: () => {},
      }

      const propsError = checkProps(LoadButton, expectedProps)
      expect(propsError).toBeUndefined()
    })
  })

  describe('Renders', () => {
    let wrapper

    beforeEach(() => {
      const props = {
        buttonText: 'Test Render text',
        emitEvent: () => {},
      }

      wrapper = shallow(<LoadButton {...props} />)
    })

    it('should render a button', () => {
      const button = findByTestAttr(wrapper, 'buttonComponent')
      expect(button.length).toBe(1)
    })
  })
})
