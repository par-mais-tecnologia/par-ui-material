import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import SeeAppBar from './'
import { MenuItem } from '@material-ui/core'

configure({ adapter: new Adapter() })

const name = 'Rui Cavaleiro'
const menuItems = [
  {
    item: 'SEUS OBJETIVOS',
    onClick: () => {}
  },
  {
    item: 'INTELIGÊNCIA',
    onClick: () => {}
  },
  {
    item: 'INFORMAÇÕES',
    onClick: () => {}
  },
  {
    item: 'CONTATO',
    onClick: () => {}
  }
]

export const testShallow = describe('SeeAppBar', () => {
  const getSeeAppBar = () => (
    <SeeAppBar
      name={name}
      lastUpdateDate={'25/02/2019'}
      menuItems={menuItems}
      handleExit={() => {}}
    />
  )

  const getSeeAppBarWithoutMenuItems = () => (
    <SeeAppBar
      name={name}
      lastUpdateDate={'25/02/2019'}
      menuItems={[]}
      handleExit={() => {}}
    />
  )

  it(`shallow`, () => {
    const wrapper = shallow(getSeeAppBar())
    expect(wrapper).toBeTruthy()
  })

  it('match Snapshot', () => {
    const wrapper = shallow(getSeeAppBar())
    expect(wrapper).toMatchSnapshot()
  })

  it('should have seeMenuMobile', () => {
    const wrapper = mount(getSeeAppBar())
    expect(wrapper.find(`#seeMenuMobile`)).toHaveLength(1)
  })

  it('should not show #seeMenuMobile in Desktop', () => {
    const wrapper = mount(getSeeAppBar())
    expect(wrapper.find(`#seeMenuMobile`).hasClass('dn-l')).toBeTruthy()
  })

  it('should not have <MenuItems> if menuItems prop is empty', () => {
    const wrapper = mount(getSeeAppBarWithoutMenuItems())
    expect(wrapper.find(MenuItem)).toHaveLength(0)
  })

  it('should have <MenuItems> equals menuItems props length', () => {
    const wrapper = mount(getSeeAppBar())
    expect(wrapper.find(MenuItem)).toHaveLength(menuItems.length)
  })
})
