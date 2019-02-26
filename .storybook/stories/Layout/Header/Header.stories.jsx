import { storiesOf } from '@storybook/react'
import React from 'react'
import withTests from '../../withTests'
import { 
  Header, 
  BioFinanceiraTheme, 
  MuiThemeProvider, 
  SeeTheme 
} from '../../../../src'
import Typography from '@material-ui/core/Typography/Typography'
import style from '../../style'

const HeaderStory = () => (
  <MuiThemeProvider theme={SeeTheme}>
    <div style={{...style.section,  gridTemplateColumns: 'repeat(auto-fill)', padding: '2rem'}}>
      <div style={style.sectionItemWrapper}>
        <Typography variant='title'>
          How to use?
        </Typography>
        <Typography variant='body2'>
          To use it you just need to wrap the content with the component and enjoy it!
        </Typography>
        <div style={style.sectionItem}>
          <div style={{...style.sectionContent, background: 'white', width: '100%'}}>
          <Header
            classes='justify-center'
            boxShadow={'0px -3px 20px 0px'}
            backgroundImage={BioFinanceiraTheme.styles.colors.seeGradient}
            height='70px' margin='16px'
            justifyContent='center'>
            <Typography align='center' style={BioFinanceiraTheme.styles.fonts.mainTitle}>
              <b>BIO</b> <span style={{fontWeight: 100}}>FINANCEIRA</span>
            </Typography>
          </Header>
          </div>
          <Typography variant='body1'>
            &lt;<span style={style.tag}>Header</span>&gt; ...
            &lt;/<span style={style.tag}>Header</span>&gt;
          </Typography>
        </div>
      </div>
    </div>
  </MuiThemeProvider>
)

storiesOf('Layout / Header', module)
  .addDecorator(withTests('Header'))
  .add('Bio Financeira', () => {
    return <HeaderStory />
  })
