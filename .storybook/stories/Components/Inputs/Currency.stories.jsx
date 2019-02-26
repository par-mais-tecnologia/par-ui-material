import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { 
  BioFinanceiraTheme, 
  TextField, 
  MuiThemeProvider, 
  Typography,
  SeeTheme,
} from '../../../../src'
import * as dictionary from '../../../../src/Core/dictionary'
import { NumberFormatCustom } from '../../../../src/Core/masks'
import * as validation from '../../../../src/Core/validation'
import style from '../../style'
const validator = new validation.Validator()
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

const CurrencyStory = () => (
  <div style={{...style.section, gridTemplateColumns: 'repeat(auto-fill,minmax(450px, .5fr))'}}>
    {
      themes.map((theme, i) => (
        <div key={i}>
          <div style={style.sectionItemWrapper}>
            <div style={style.sectionItem}>
              <div style={style.content}>
                <MuiThemeProvider theme={theme.theme}>
                  <TextField
                    required
                    validator={{ validator, type: validation.types.required }}
                    label={dictionary.CAMPO_MONETARIO}
                    value={0}
                    InputProps={{
                      inputComponent: NumberFormatCustom,
                    }}
                  />
                </MuiThemeProvider>
              </div>
              <Typography variant='body1'>
                &lt;
                  <span style={style.tag}>CheckBox </span>
                  <span style={style.attr}>required </span>

                  <span style={style.attr}> value</span>=
                  <span style={style.value}>
                    &#123;0&#125;
                  </span>
                  <br/>
                  <span style={style.attr}>validator</span>=
                  <span style={style.value}>
                    &#123;&#123; 
                    validator, 
                    type: validation.types.required
                    &#125;&#125;
                  </span>
                  <br/>
                  <span style={style.attr}> InputProps</span>=
                  <span style={style.value}>
                    &#123;inputComponent: NumberFormatCustom&#125;
                  </span>
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
  .add('Currency', () => {
    return <CurrencyStory/>
  })
