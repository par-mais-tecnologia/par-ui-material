import React, { PureComponent } from 'react';
import TextFieldMUI from '@material-ui/core/TextField';

export default class Generic extends PureComponent {

    render() {
        return (
            <TextFieldMUI
                {...this.props} />
        );
    }
}
