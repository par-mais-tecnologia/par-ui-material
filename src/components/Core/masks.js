import NumberFormat from "react-number-format";
import React from "react";

export function NumberFormatCustom (props) {
    const { inputRef, onChange, ...other } = props

    return (
        <div className='pl3'>
            <NumberFormat
                {...other}
                getInputRef={inputRef}
                onValueChange={values => {
                    onChange({
                        target: {
                            value: values.value
                        }
                    })
                }}
                thousandSeparator=' '
                decimalSeparator=','
                prefix='R$ '
                decimalScale={2}
                fixedDecimalScale/>
        </div>
    )
}