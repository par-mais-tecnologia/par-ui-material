import React from "react";
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DatePicker from './datePicker'
import MomentUtils from "material-ui-pickers/utils/moment-utils";
configure({ adapter: new Adapter() });

export const test = describe('DatePicker', () => {
        it('shallow DatePicker', () => {
            const wrapper = shallow(<DatePicker dateUtilityLibrary = {MomentUtils}/>);
            expect(wrapper).toBeTruthy();
        });

        it('shallow DatePicker match Snapshot', () => {
            const wrapper = shallow(<DatePicker dateUtilityLibrary = {MomentUtils}/>);
            expect(wrapper).toMatchSnapshot();
        });
    });