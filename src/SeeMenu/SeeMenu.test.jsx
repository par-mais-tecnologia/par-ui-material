import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import SeeMenu from './'
import MenuItem from '@material-ui/core/MenuItem'

configure({ adapter: new Adapter() })

const menuItems = [
  {
    item: 'SEUS OBJETIVOS',
    onClick: () => {}
  },
  {
    item: 'INTELIGÊNCIA EM INVESTIMENTOS',
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

export const testShallow = describe('SeeMenu shallow', () => {
  const getShallow = () => (
    <SeeMenu
      name='Rui Cavaleiro'
      lastUpdate={{ date: '29/09/1989', time: '14:34' }}
      menuItems={menuItems}
      isOpen
      handleClose={() => {}}
    />
  )

  it(`shallow Stepper`, () => {
    const wrapper = shallow(getShallow())
    expect(wrapper).toBeTruthy()
  })

  it('shallow Stepper match Snapshot', () => {
    const wrapper = shallow(getShallow())
    expect(wrapper).toMatchSnapshot()
  })

  it(`should have the number of <MenuItem/>'s equals the number of steps`, () => {
    const wrapper = mount(<SeeMenu
      name='Rui Cavaleiro'
      lastUpdate={{ date: '29/09/1989', time: '14:34' }}
      menuItems={menuItems}
      isOpen
      handleClose={() => {}}
    />)
    expect(wrapper.find(MenuItem)).toHaveLength(menuItems.length)
  })
})
