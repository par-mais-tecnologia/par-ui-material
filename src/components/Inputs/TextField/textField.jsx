import React, {PureComponent} from 'react'
import FormControl from '@material-ui/core/FormControl/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText/FormHelperText'
import TextFieldMUI from '@material-ui/core/TextField/TextField'

class TextField extends PureComponent {
    state = {}

    handleInputBlur(event) {
        if (this.props.onBlur) {
            this.props.onBlur(event)
        }
    }

    handleInputChange(event) {
        if (this.props.onChange) {
            this.props.onChange(event)
        }
    }

    handleInputFocus(event) {
        if (this.props.onFocus) {
            this.props.onFocus(event)
        }
    }

    getStyle(props) {
        const {minWidth, maxWidth, style } = props;
        return {
            minWidth: minWidth ? minWidth : '0',
            maxWidth: maxWidth ? maxWidth : '100%',
            ...style
        }
    }

    render() {
        const inputProps = {
            onBlur: this.handleInputBlur.bind(this),
            onChange: this.handleInputChange.bind(this),
            onFocus: this.handleInputFocus.bind(this),
        };

        const {helperText, id, label, required, showHelper, value,} = this.props

        return (
            <FormControl
                aria-describedby={id}
                required={required}
                style = {this.getStyle(this.props)}>
                <TextFieldMUI
                    {...this.props}
                    {...inputProps}
                    label={label}
                    id={id}
                    margin='normal'
                    value={value}
                />
                {showHelper ? <FormHelperText id={id}> {helperText} </FormHelperText> : ''}
            </FormControl>
        )
    }
}

TextField.defaultProps = {
    errorMessage: '',
    id: `textField ${Math.floor(Math.random() * 100)}`,
    label: '',
    required: false,
    showHelper: false,
    value: ''
}

export default TextField
