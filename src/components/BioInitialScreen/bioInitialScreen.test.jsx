import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import BioInitialScreen from './bioInitialScreen'
import BaseInitialScreen from '../BaseInitialScreen/baseInitialScreen'

configure({ adapter: new Adapter() })

const getShallow = () => (
  <BaseInitialScreen
    imageSrc={'https://wallhalla.com/thumbs/preview/l/La748MeuPdY.jpg'}
    middleBoxFullScreen={false}
    middleBoxColor='#2b4e99'>
    <BioInitialScreen />
  </BaseInitialScreen>
)

describe('bioInitialScreen', () => {
  const wrapper = shallow(getShallow())

  it('shallow BioInitialScreen', () => {
    expect(wrapper).toBeTruthy()
  })

  it('shallow BioInitialScreen match Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
