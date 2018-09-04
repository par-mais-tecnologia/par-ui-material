import React from "react";
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CheckBox from './checkBox'
configure({ adapter: new Adapter() });

export const test = describe('CheckBox', () => {
    it('shallow CheckBox', () => {
        const wrapper = shallow(
            <CheckBox/>
        );
        expect(wrapper).toBeTruthy();
    });

    it('shallow CheckBox match Snapshot', () => {
        const wrapper = shallow(
            <CheckBox/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});