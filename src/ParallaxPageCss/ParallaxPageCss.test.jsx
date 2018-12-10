import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import ParallaxPageCss from './'

configure({ adapter: new Adapter() })

const foo = (
  <div className='flex flex-column items-center justify-center pa4' style={{ backgroundColor: 'red', height: '100%' }}>
    <div>00000000</div>
    <div>aaaaaaaaa</div>
    <div>uuuuuuuuuuu</div>
  </div>
)

export const testShallow = describe('Stepper shallow', () => {
  const getShallow = () => (
    <ParallaxPageCss>
      {foo}
    </ParallaxPageCss>
  )

  it(`shallow ParallaxPageCss`, () => {
    const wrapper = shallow(getShallow())
    expect(wrapper).toBeTruthy()
  })

  it('shallow ParallaxPageCss match Snapshot', () => {
    const wrapper = shallow(getShallow())
    expect(wrapper).toMatchSnapshot()
  })
})
