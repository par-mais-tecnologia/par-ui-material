import React from 'react'
import dataset from '../assets/Dados_Backend.json'
import { storiesOf } from '@storybook/react'
import {
  BaseFooter,
  MktAppsFooter,
  MuiThemeProvider,
  LineChart,
  ParallaxPageCss,
  SeeAppBar,
  SummaryHeader,
  SeeTheme,
  Typography,
  Paper

} from '../../src'
import { withKnobs, boolean} from '@storybook/addon-knobs'

const ParallaxPageStory = ( props ) => (
  <MuiThemeProvider theme={SeeTheme}>
    {props.navbar}
    <ParallaxPageCss mobile={props.mobile}
      header={
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
              ctetur, adipisicing elit. Facere, eaque. Nulla maiores quisquam nobis molestiae reiciendis earum dolor soluta suscipit asperiores ut nostrum quae, accusamus dicta eligendi adipisci obcaecati libero.
              </p>
              <button onClick={() => alert('clicked')}>button</button>
            </Typography>
          </div>

        </SummaryHeader>
      }

      content={

        <div className='flex flex-column mt3' style={{ background: 'white' }}>
          <Paper className='mh5-ns mh3 mt5'>
            <LineChart
              dataset={dataset}
              lineStroke={['#5EB8C0', '#94ba1d']}
              lineStrokeWidth={[4, 2]}
              lineFill={['none', 'none']}
              paddingH={100}
              paddingW={100}
              yTicks={9}
              xTicks={5}
              changePeriod={(data) => console.log('Changed graph period. Datapoints:', data.length)}
            />
          </Paper>
        </div>
      }
      footer={
        props.footer
      }
    />
  </MuiThemeProvider>
)

storiesOf('LineChart', module)
  .addDecorator(withKnobs)
  .add('Base', () => {
    return (
      <MuiThemeProvider theme={SeeTheme}>
        <LineChart
          dataset={dataset}
          lineStroke={['#5EB8C0', '#94ba1d']}
          lineStrokeWidth={[4, 2]}
          lineFill={['none', 'none']}
          paddingH={100}
          paddingW={100}
          yTicks={9}
          xTicks={5}
          changePeriod={(data) => console.log('Changed graph period. Datapoints:', data.length)}
        />
      </MuiThemeProvider>
  )
})

storiesOf('LineChart', module)
  .addDecorator(withKnobs)
  .add('Implemented', () => {
    return (
      <ParallaxPageStory mobile={boolean('Mobile mode', false)}
        navbar={
          <div style={{position: 'fixed', width:'100vw', zIndex: '3'}}>
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
