
import { storiesOf } from '@storybook/react';
import EmailInput from '../Inputs/Email/email'
import React, { PureComponent } from 'react';
import { decorateAction } from '@storybook/addon-actions'
import { specs } from 'storybook-addon-specifications'
import { test } from '../Inputs/Email/email.test';
import createMuiTheme from "@material-ui/core/es/styles/createMuiTheme";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ff4400',
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            contrastText: '#ffcc00',
        },
    },
    overrides:{
        MuiInput: {
            underline: {
                '&:before': {
                    borderBottomColor: '#ffcc00',
                }
            },
        },
    }
});

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
            <MuiThemeProvider theme={theme}>
                <h5> Campo Obrigatório </h5>
                <EmailInput
                    required = {true}
                    label="Email"
                    onChange={this.handleEmailChange('Email Modificado')}
                    name="email"
                    value={value}
                />

                <h5> Campo Não obrigatório </h5>
                <EmailInput
                    label="Email"
                    onChange={this.handleEmailChange('Email Modificado')}
                    name="email"
                    value={value}
                />

                <h5> Campo sem mostrar erros </h5>
                <EmailInput
                    label="Email"
                    onChange={this.handleEmailChange('Email Modificado')}
                    name="email"
                    value={value}
                    showError={false}
                />
            </MuiThemeProvider>
        );
    }
}

storiesOf('Input', module)
    .add('Email Input', () => {
        specs(() => test);
        return <EmailInputStory/>
    });
