import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { decorateAction } from '@storybook/addon-actions'
import { 
  SeeTheme,
  CheckBox, 
  MuiThemeProvider,
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
    name: 'SeeTheme || BioFinanceiraTheme',
    theme: SeeTheme
  }
]

const CheckBoxStory = () => (
  <div style={{...style.section, gridTemplateColumns: 'repeat(auto-fill,minmax(450px, .5fr))'}}>
    {
      themes.map((theme, i) => (
        <div key={i}>
          <div style={style.sectionItemWrapper}>
            <div style={style.sectionItem}>
              <div style={style.content}>
                <MuiThemeProvider theme={theme.theme}>
                <CheckBox
                  value='checked'
                  color='primary'
                />
                </MuiThemeProvider>
              </div>
                <Typography variant='body1'>
                  &lt;
                    <span style={style.tag}>CheckBox </span>
                    <span style={style.attr}>color</span>=
                    <span style={style.value}>'primary'</span>
                  /&gt;
                </Typography>
            </div>
          </div>
          <div style={style.sectionItemWrapper}>
            <div style={style.sectionDetails}>
              <Typography variant='title'>
                How to use?
              </Typography>
              <Typography variant='subtitle1'>
                We have two differents themes that affect the buttons display,
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

storiesOf('Components / Input', module)
  .addDecorator(withTests('CheckBox'))
  .add('CheckBox', () => {
    return <CheckBoxStory/>
  })
