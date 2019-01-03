import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  BaseFooter,
  MktAppsFooter,
  MuiThemeProvider,
  ParallaxPageCss,
  SeeAppBar,
  SummaryHeader,
  SeeTheme,
  Typography

} from '../../src'
import withTests from './withTests'
import { withKnobs, boolean} from '@storybook/addon-knobs'

const ParallaxPageStory = ( props ) => (
  <MuiThemeProvider theme={SeeTheme}>
    {props.navbar}

    <ParallaxPageCss>
      <SummaryHeader
        classes='justify-center'
        boxShadow={'0px -3px 20px 0px'}
        backgroundImage={SeeTheme.styles.colors.seeGradient}
        margin='16px'
        justifyContent='center'
        height={'100%'}
      >
        <div className='flex justify-center items-center flex-column'>
          <Typography align='center' style={SeeTheme.styles.fonts.headline}>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, eaque. Nulla maiores quisquam nobis molestiae reiciendis earum dolor soluta suscipit asperiores ut nostrum quae, accusamus dicta eligendi adipisci obcaecati libero.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, eaque. Nulla maiores quisquam nobis molestiae reiciendis earum dolor soluta suscipit asperiores ut nostrum quae, accusamus dicta eligendi adipisci obcaecati libero.
            </p>
            <button onClick={() => alert('oiiiiii')}>Button</button>
          </Typography>
        </div>

      </SummaryHeader>          
    </ParallaxPageCss>

    <div style={{ 
      position: 'relative',
      height: '1000px', 
      background: 'white', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center'}}
    >
      <Typography>
        Conteudo
      </Typography>
    </div>

    {props.footer}
  </MuiThemeProvider>
)

storiesOf('ParallaxPageCss', module)
  .addDecorator(withTests('ParallaxPageCss'))
  .addDecorator(withKnobs)
  .add('Base', () => {
    return (
      <ParallaxPageStory />
    )
  })
  .add('Implemented', () => {
    return (
      <ParallaxPageStory
        navbar={
          <div style={{
            position: 'fixed', 
            width:'100vw',
            zIndex: 1,
            marginBottom: '100%'
            }}>
            <SeeAppBar
              name={'Marcelo Silveira'}
              lastUpdate={'29/09/1989'}
              menuItems={[]}
              handleExit={() => console.log('handleExit')}
              menuIsOpen={false}
              closeMenu={() => console.log('closeMenu')}
              openMenu={() => console.log('openMenu')}
              selectedIndex={0}
              style={{position: 'relative'}}
            />
          </div>
        }
        footer={
          <BaseFooter>
            <MktAppsFooter/>
          </BaseFooter>
        }
      />
  )
})
