import { storiesOf } from '@storybook/react'
import EmailInput from '../Inputs/Email/email'
import React, { PureComponent } from 'react'
import MuiThemeProvider from '@material-ui/core/es/styles/MuiThemeProvider'
import 'tachyons/css/tachyons.min.css'
import theme from '../themes/bioFinanceira/theme'
import createMuiTheme from "@material-ui/core/es/styles/createMuiTheme";

const theme2 = createMuiTheme({
    palette: {
        primary: {
            main: '#f787ff'
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            contrastText: '#ffcc00'
        },
        error: {
            main: '#487544'
        }

    },
    overrides: {
        MuiInput: {
            underline: {
                '&:before': {
                    borderBottomColor: '#ffcc00'
                }
            }
        }
    }
})

class ThemeStory extends PureComponent {

  render () {

    return (
        <div className='pl3'>
            <MuiThemeProvider theme={theme}>
                <h2> H2 puro nao foi estilizado pelo tema </h2>
                <EmailInput
                    required
                    label='Email'
                    name='email'
                />

                <h2 className={theme.styles.classes.title1}> H2 pega classe do tema para se estilizar</h2>

                <MuiThemeProvider theme={theme2}>
                    <h2> Exemplo de component MUI estilizado pelo tema </h2>
                    <EmailInput
                        required
                        label='Email'
                        name='email'
                    />
                </MuiThemeProvider>
            </MuiThemeProvider>
        </div>
    )
  }
}

storiesOf('Theme', module)
  .add('Bio Financeira Theme', () => {
    return <ThemeStory />
  })
