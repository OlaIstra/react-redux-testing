import React from 'react'
import { findByTestAttr, checkProps } from '../../../utils/utils'
import { shallow } from 'enzyme'
import LoadButton from './Button'

describe('Button', () => {
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
    let mockFunc

    beforeEach(() => {
      mockFunc = jest.fn()
      const props = {
        buttonText: 'Test Render text',
        emitEvent: mockFunc,
      }

      wrapper = shallow(<LoadButton {...props} />)
    })

    it('should render a button', () => {
      const button = findByTestAttr(wrapper, 'buttonComponent')
      expect(button.length).toBe(1)
    })

    it('should emit callback on click event', () => {
      const button = findByTestAttr(wrapper, 'buttonComponent')
      button.simulate('click')
      const callback = mockFunc.mock.calls.length
      expect(callback).toBe(1)
    })
  })
})
