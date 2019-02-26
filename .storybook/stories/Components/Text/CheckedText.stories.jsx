import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'
import { 
  MuiThemeProvider,
  BioFinanceiraTheme,
  SeeTheme,
  CheckedText,
  Typography
} from '../../../../src'
import withTests from '../../withTests'
import style from '../../style'
const themes = [
  {
    name:'none',
    theme: ''
  },
  {
    name: 'SeeTheme',
    theme: SeeTheme
  }, 
  {
    name: 'BioFinanceiraTheme',
    theme: BioFinanceiraTheme
  }
]

const CheckStory = () => (
  <div style={{...style.section, gridTemplateColumns: 'repeat(auto-fill,minmax(450px, .5fr))'}}>
    {
      themes.map((theme, i) => (
        <div key={i}>
          <div style={style.sectionItemWrapper}>
            <div style={style.sectionItem}>
              <div style={style.content}>
                <MuiThemeProvider theme={theme.theme}>
                  <CheckedText>
                    {text('Texto', 'Você não possui dependentes Você não possui dependentes Você não possui dependentes Você não possui dependentes Você não possui dependentes Você não possui dependentes ')}
                  </CheckedText>
                </MuiThemeProvider>
              </div>
                <Typography variant='body1'>
                  &lt;
                    <span style={style.tag}>CheckedText</span>
                  &gt;...
                </Typography>
            </div>
          </div>
          <div style={style.sectionItemWrapper}>
            <div style={style.sectionDetails}>
              <Typography variant='title'>
                How to use?
              </Typography>
              <Typography variant='subtitle1'>
                We have three differents themes that affect the CheckedText display,
                to implement each you have to import <span style={style.tag}>MuiThemeProvider </span>
                and the respective theme file, in this case we are using <span style={style.attr}>{theme.name} </span>,
                on your work file and then add the tag as following:
              </Typography>
              <Typography variant='body1'>
                &lt;
                  <span style={style.tag}>MuiThemeProvider </span>
                  <span style={style.attr}>theme</span>=
                  <span style={style.value}>'{theme.name}'</span>
                &gt;...
              </Typography>
            </div>
          </div>
        </div>
      ))
    }
  </div>
)

storiesOf('Components / Text ', module)
  .addDecorator(withTests('CheckedText'))
  .addDecorator(withKnobs)
  .add('Checked', () => (
    <CheckStory />
  ))