import React, { PureComponent } from 'react';
import TextFieldMUI from '@material-ui/core/TextField';

export default class Currency extends PureComponent {

    render() {
        return (
            <TextFieldMUI
                {...this.props} />
        );
    }
}
