import React from 'react'
import { storiesOf } from '@storybook/react'
import { 
  MuiThemeProvider, 
  SeeTheme, 
  Typography, 
  BaseFooter,
  MktAppsFooter
} from '../../../src'
import withTests from '../withTests'
import style from '../style'

const FooterStory = () => (
  <MuiThemeProvider theme={SeeTheme}>
    <div style={{...style.section,  gridTemplateColumns: 'repeat(auto-fill)', padding: '2rem'}}>
      <div style={style.sectionItemWrapper}>
        <Typography variant='title'>
          How to use?
        </Typography>
        <Typography variant='body2'>
          To use it you just need to wrap the content with the component and enjoy it!
          In this case we are wrapping the <span style={style.value}>&lt;/MktAppsFooter> </span>
          component.
        </Typography>
        <div style={style.sectionItem}>
          <div style={{...style.sectionContent, background: 'white', width: '100%', minWidth: '15rem'}}>
            <BaseFooter>
              <MktAppsFooter/>
            </BaseFooter>
          </div>
          <Typography variant='body1'>
            &lt;<span style={style.tag}>BaseFooter</span>&gt; ...
            &lt;/<span style={style.tag}>BaseFooter</span>&gt;
          </Typography>
        </div>
      </div>
    </div>
  </MuiThemeProvider>
)

storiesOf('Layout ', module)
  .addDecorator(withTests('baseFooter'))
  .add('Footer', () => <FooterStory />)
