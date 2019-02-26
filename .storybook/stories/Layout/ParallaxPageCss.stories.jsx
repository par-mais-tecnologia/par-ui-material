import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  MuiThemeProvider,
  ParallaxPageCss,
  SummaryHeader,
  SeeTheme,
  Typography,
  IconButton,
  RepeatIcon
} from '../../../src'
import withTests from '../withTests'
import style from '../style'

const ParallaxStory = (props) => (
  <MuiThemeProvider theme={SeeTheme}>
    <div style={{...style.section,  gridTemplateColumns: 'repeat(auto-fill)', padding: '2rem'}}>
      <div style={style.sectionItemWrapper}>
        <Typography variant='title'>
          How to use?
        </Typography>
        <Typography variant='body2'>
          The style of <span style={style.tag}>ParallaxPageCss </span> is part of 
          <span style={style.tag}>SeeTheme </span> theme, to use it you must import the files
          into your project.
          To use it you just need to wrap the content with the component and enjoy it!
        </Typography>
        <div style={style.sectionItem}>
          <div style={{...style.sectionContent, width: '100%', height: '300px', overflowY: 'scroll', background: 'white'}}>
            <ParallaxPageCss>
              <SummaryHeader
                classes='justify-center'
                headerProps={{
                  boxShadow:'0px -3px 20px 0px',
                  backgroundImage:SeeTheme.styles.colors.seeGradient,
                  justifyContent:'center',
                }}>

                <div className='flex justify-center items-center flex-column'>
                  <div>
                    <Typography
                      align='center'
                      style={{...SeeTheme.styles.fonts.headline, marginTop:'117px', marginBottom:'0px'}}>
                      INVESTIMENTOS TOTAIS
                    </Typography>
                  </div>

                  <div className='flex flex-row'>
                    <div className='left'>
                      <p style={{marginTop:'18px', color:'white', fontSize:'24px',fontFamily:'Roboto Light', marginBottom:'117px' }}>
                        R$ 2 000,00
                      </p>
                    </div>
                    <div className='right'>
                      <IconButton style={{ padding: '12px 0px 12px 12px' }} onClick={() => alert('Congrats! You just got a Malware :)')}>
                        <RepeatIcon style={{color:'white', fontSize:'24px', marginTop:'6px'}} />
                      </IconButton>
                    </div>
                  </div>
                </div>
              </SummaryHeader>
            </ParallaxPageCss>
            <div style={{ 
              position: 'relative',
              height: '500px', 
              background: 'white', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center'}}>
              <Typography>
                Conteudo
              </Typography>
            </div>
          </div>
          <Typography variant='body1'>
            &lt;<span style={style.tag}>ParallaxPageCss</span>&gt; ...
            &lt;/<span style={style.tag}>ParallaxPageCss</span>&gt;
          </Typography>
        </div>
      </div>
    </div>
  </MuiThemeProvider>
)

storiesOf('Layout ', module)
  .addDecorator(withTests('ParallaxPageCss'))
  .add('Parallax', () => <ParallaxStory />)