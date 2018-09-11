import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Password from './password'

configure({ adapter: new Adapter() })

export const test = describe('Password', () => {
    it('shallow Password', () => {
        const wrapper = shallow(
            <Password />
        )
        expect(wrapper).toBeTruthy()
    })

    it('shallow Password match Snapshot', () => {
        const wrapper = shallow(
            <Password />
        )
        expect(wrapper).toMatchSnapshot()
    })
})
