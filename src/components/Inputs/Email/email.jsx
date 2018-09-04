import React, { PureComponent } from 'react';
import {TextValidator} from 'react-material-ui-form-validator';
import TextFieldMUI from "@material-ui/core/TextField";

export default class EmailInput extends PureComponent {

    render() {
        return (
            <TextFieldMUI
                {...this.props} />
        );
    }
}
