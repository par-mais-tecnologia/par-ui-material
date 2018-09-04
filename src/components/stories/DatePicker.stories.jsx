
import { storiesOf } from '@storybook/react';
import DatePicker from '../Inputs/DatePicker/datePicker'
import React, { PureComponent } from 'react';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import { decorateAction } from '@storybook/addon-actions'
import { specs } from 'storybook-addon-specifications'

import { test } from '../Inputs/DatePicker/datePicker.test';

class DatePickerStory extends PureComponent {
    state = {
        selectedDate: new Date(),
    };

    handleDateChange = decorateAction([args => {
        this.setState({ selectedDate: args[0] });
        return args;
    }]);

    render() {
        const { selectedDate } = this.state;

        return (
                <DatePicker
                    dateUtilityLibrary = {MomentUtils}
                    value={selectedDate}
                    onChange={this.handleDateChange('selecionei a data')}
                />
        );
    }
}

storiesOf('DatePicker', module)
  .add('with momentJs', () => {
      specs(() => test);
      return <DatePickerStory/>
  });
