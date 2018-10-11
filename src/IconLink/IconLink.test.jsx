import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import IconLink from './'
import { number, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

configure({ adapter: new Adapter() })

const wrapper = shallow(
  <IconLink
    color={text('color', '#909090')}
    fontSize={number('fontSize', 15)}
    icon={text('icon', 'reload')}
    onClick={action('Clicou e executou função!')}
    text={text('text', 'Refazer BIO')}
  />
)

export const test = describe('IconLink', () => {
  it('shallow IconLink', () => {
    expect(wrapper).toBeTruthy()
  })

  it('shallow IconLink match Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
