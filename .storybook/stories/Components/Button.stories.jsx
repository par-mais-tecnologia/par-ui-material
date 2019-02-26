import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  SeeTheme,
  BioFinanceiraTheme,
  Button,
  Typography,
  MuiThemeProvider
} from '../../../src'
import style from '../style'


const variants = ['contained', 'outlined']
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

const ButtonStory = () => (
  <div style={{...style.section, gridTemplateColumns: 'repeat(auto-fill,minmax(450px, .5fr))'}}>
    {
      themes.map((theme, i) => (
        <div key={i}>
          {
            variants.map((variant, i) => (
              <div style={style.sectionItemWrapper} key={i}>
                <div style={style.sectionItem}>
                  <div style={style.content}>
                    <MuiThemeProvider theme={theme.theme}>
                      <Button variant={variant}>
                        Click me
                      </Button>
                    </MuiThemeProvider>
                  </div>
                    <Typography variant='body1'>
                      &lt;
                        <span style={style.tag}>Button </span>
                        <span style={style.attr}>variant</span>=
                        <span style={style.value}>'{variant}'</span>
                      &gt;
                    </Typography>
                </div>
              </div>
            ))
          }
          <div style={style.sectionItemWrapper}>
            <div style={style.sectionDetails}>
              <Typography variant='title'>
                How to use?
              </Typography>
              <Typography variant='subtitle1'>
                We have three differents themes that affect the buttons display,
                to implement each you have to import <span style={style.tag}>MuiThemeProvider </span>
                and the respective theme file, in this case we are using <span style={style.attr}>{theme.name} </span>
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

storiesOf('Components ', module)
  .add('Button', () => (
    <ButtonStory />
  ))