import React from "react";
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import EmailInput from './email'
configure({ adapter: new Adapter() });

export const test = describe('E-mail', () => {
    it('shallow E-mail', () => {
        const wrapper = shallow(
            <EmailInput/>
        );
        expect(wrapper).toBeTruthy();
    });

    it('shallow E-mail match Snapshot', () => {
        const wrapper = shallow(
            <EmailInput/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});