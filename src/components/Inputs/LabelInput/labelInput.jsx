import React, { PureComponent } from 'react'
import TextFieldMUI from '@material-ui/core/TextField'
import FormControl from "@material-ui/core/FormControl/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText/FormHelperText";

class LabelInput extends PureComponent {

    getStyle(props) {
        const {minWidth, maxWidth } = props;
        return {minWidth: minWidth ? minWidth : '0',
                maxWidth: maxWidth ? maxWidth : '100%'}
    }

    render () {
        const { required, showHelperText, helperTex } = this.props;

        return (
            <FormControl
                aria-describedby='label-input-form-control'
                required={required}
                style = {this.getStyle(this.props)}>
                <TextFieldMUI
                    {...this.props}/>
                {showHelperText ? <FormHelperText id='label-input-form-control'> {helperTex} </FormHelperText> : ''}
            </FormControl>

        )
    }
}

LabelInput.defaultProps = {
    showHelperText: false,
    showLabel: true,
    required: false,
    helperTex: '',
}

export default LabelInput
