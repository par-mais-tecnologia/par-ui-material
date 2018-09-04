
import { storiesOf } from '@storybook/react';
import Currency from '../Inputs/Currency/currency'
import React, { PureComponent } from 'react';
import { decorateAction } from '@storybook/addon-actions'
import { specs } from 'storybook-addon-specifications'
import NumberFormat from 'react-number-format';

import { test } from '../Inputs/Currency/currency.teste';

class CurrencyStory extends PureComponent {
    state = {
        value: false,
    };

    handleCurrencyChange = decorateAction([args => {
        this.setState({ value: args[0].target.value });
        return args;
    }]);

    render() {
        const { value } = this.state;

        return (
            <Currency
                label="Campo Monetário"
                value={value}
                onChange={this.handleCurrencyChange('valor monetário modificado')}
                id="formatted-numberformat-input"
                InputProps={{
                    inputComponent: NumberFormatCustom,
                }}
            />
        );
    }
}

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={values => {
                onChange({
                    target: {
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            prefix="$"
        />
    );
}

storiesOf('Currency', module)
    .add('pure', () => {
        specs(() => test);
        return <CurrencyStory/>
    });
