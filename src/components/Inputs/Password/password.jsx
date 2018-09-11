import React, { PureComponent } from 'react'
import TextFieldMUI from '@material-ui/core/TextField'
import withStyles from "@material-ui/core/es/styles/withStyles";

const style =  {
    marginTop: '13px'
}

class Password extends PureComponent {

    render () {
        return (
                <TextFieldMUI
                    inputProps={{style: style}}
                    {...this.props} />
            )
        }
    }

export default withStyles(style)(Password);