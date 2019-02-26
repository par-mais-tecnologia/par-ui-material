import { storiesOf } from '@storybook/react'
import React from 'react'
import withTests from '../../withTests'
import { 
  MuiThemeProvider, 
  SeeTheme, 
  Typography,
  IconBar 
} from '../../../../src'
import style from '../../style'

const IconBarStory = () => (
  <MuiThemeProvider theme={SeeTheme}>
    <div style={{...style.section,  gridTemplateColumns: 'repeat(auto-fill)', padding: '2rem'}}>
      <div style={style.sectionItemWrapper}>
        <Typography variant='title'>
          How to use?
        </Typography>
        <Typography variant='body2'>
          This component do not have properties to be passed throught, to use it you just apply
           the tag on your code.
        </Typography>
        <div style={style.sectionItem}>
          <div style={{...style.sectionContent, background: 'white', width: '100%'}}>
            <IconBar />
          </div>
          <Typography variant='body1'>
            &lt;<span style={style.tag}>IconBar</span> /&gt;
          </Typography>
        </div>
      </div>
    </div>
  </MuiThemeProvider>
)

storiesOf('Layout / Menu', module)
  .addDecorator(withTests('IconBar'))
  .add('Social menu', () => <IconBarStory/> )