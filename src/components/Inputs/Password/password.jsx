import React, { PureComponent } from 'react'
import TextFieldMUI from '@material-ui/core/TextField'
import withStyles from "@material-ui/core/es/styles/withStyles";

class Password extends PureComponent {

    render () {

        return (
                <TextFieldMUI
                    {...this.props} />
            )
        }
    }

export default Password;
