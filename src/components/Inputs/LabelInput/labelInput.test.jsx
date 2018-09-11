import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import LabelInput from './labelInput'

configure({ adapter: new Adapter() })

export const test = describe('labelInput', () => {
    it('shallow Label Input', () => {
        const wrapper = shallow(
            <LabelInput />
        )
        expect(wrapper).toBeTruthy()
    })

    it('shallow Label Input match Snapshot', () => {
        const wrapper = shallow(
            <LabelInput />
        )
        expect(wrapper).toMatchSnapshot()
    })
})
