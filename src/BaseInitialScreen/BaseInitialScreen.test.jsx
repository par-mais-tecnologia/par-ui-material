import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import BaseInitialScreen from './'
import { convertHexToRGB } from './functions'

configure({ adapter: new Adapter() })

const getShallow = () => (
  <BaseInitialScreen
    imageSrc={'https://wallhalla.com/thumbs/preview/l/La748MeuPdY.jpg'}
    middleBoxFullScreen={false}
    middleBoxColor='#2b4e99'>
    <h1 className='roboto-light white'>
      Content Here
    </h1>
  </BaseInitialScreen>
)

describe('baseInitialScreen', () => {
  const wrapper = shallow(getShallow())

  it('shallow BaseInitialScreen', () => {
    expect(wrapper).toBeTruthy()
  })

  it('shallow BaseInitialScreen match Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('Hexadecimal color converter for RGB', () => {
    it('should return a right color in RGB', () => {
      expect(convertHexToRGB('#f442e5', 0.6)).toBe('rgba(244, 66, 229, 0.6)')
    })

    it('should return undefined if color is empty', () => {
      expect(convertHexToRGB()).toEqual(new Error('Hexadecimal color is undefined.'))
    })
  })
})
