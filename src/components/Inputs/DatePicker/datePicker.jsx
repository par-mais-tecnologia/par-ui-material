import React, { PureComponent } from 'react';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import DatePickerMUI from 'material-ui-pickers/DatePicker'

export default class DatePicker extends PureComponent {

    render() {
        const { dateUtilityLibrary } = this.props;

        return (
            <MuiPickersUtilsProvider utils={dateUtilityLibrary}>
                <DatePickerMUI
                    {...this.props}
                />
            </MuiPickersUtilsProvider>
        );
    }
}