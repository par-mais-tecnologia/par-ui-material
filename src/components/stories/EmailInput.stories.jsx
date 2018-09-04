
import { storiesOf } from '@storybook/react';
import EmailInput from '../Inputs/Email/email'
import React, { PureComponent } from 'react';
import { decorateAction } from '@storybook/addon-actions'
import { specs } from 'storybook-addon-specifications'
import { test } from '../Inputs/Currency/currency.teste';

class EmailInputStory extends PureComponent {
    state = {
        value: '',
    };

    handleEmailChange = decorateAction([args => {
        this.setState({ value: args[0].target.value });
        return args;
    }]);

    render() {
        const { value } = this.state;

        return (
                <EmailInput
                    label="Email"
                    onChange={this.handleEmailChange('teste')}
                    onBlur={() => console.log('hi')}
                    name="email"
                    value={value}
                    validators={['required', 'isEmail']}
                    errorMessages={['Campo Obrigatório', 'Email inválido']}
                />
        );
    }
}

storiesOf('EmailInput', module)
    .add('pure', () => {
        specs(() => test);
        return <EmailInputStory/>
    });
