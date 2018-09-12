import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import BaseInitialScreen from '../BaseInitialScreen/baseInitialScreen'
import MyWalletLoginScreen from './myWalletLoginScreen'

configure({ adapter: new Adapter() })

const getShallow = () => (
  <BaseInitialScreen
    imageSrc={'https://wallhalla.com/thumbs/preview/l/La748MeuPdY.jpg'}
    middleBoxFullScreen={false}
    middleBoxColor='#2b4e99'>
    <MyWalletLoginScreen />
  </BaseInitialScreen>
)

describe('myWalletLoginScreen', () => {
  const wrapper = shallow(getShallow())

  it('shallow MyWalletLoginScreen', () => {
    expect(wrapper).toBeTruthy()
  })

  it('shallow MyWalletLoginScreen match Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
