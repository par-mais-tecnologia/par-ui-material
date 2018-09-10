import React from "react";
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Generic from './generic'
configure({ adapter: new Adapter() });

export const test = describe('Generic', () => {
    it('shallow Generic', () => {
        const wrapper = shallow(
            <Currency/>
        );
        expect(wrapper).toBeTruthy();
    });

    it('shallow Generic match Snapshot', () => {
        const wrapper = shallow(
            <Currency/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});