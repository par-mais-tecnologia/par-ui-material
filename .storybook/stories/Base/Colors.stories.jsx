import React from 'react'
import { storiesOf } from '@storybook/react'
import { SeeTheme, MuiThemeProvider } from '../../../src'
import { Typography } from '@material-ui/core';
import style from '../style'

const ColorStory = () => (
    <div style={{...style.section, gridTemplateColumns: 'repeat(auto-fill,minmax(150px, .5fr))'}}>
        {
            Object.keys(SeeTheme.styles.colors).map(key => (
                <div style={{...style.sectionItemWrapper, alignSelf: 'start'}} key={key}>
                    <div style={style.sectionItem}>
                        <Typography variant='body2'>
                            {key}
                        </Typography>
                        <div 
                            style={{
                                background: `${SeeTheme.styles.colors[key]}`, 
                                width: '4rem', 
                                height: '4rem',
                                boxShadow: '4px 4px 6px #DEDEDE',
                                borderRadius: '10px'
                            }}
                        />
                    </div>
                    <Typography variant='caption'>
                        {SeeTheme.styles.colors[key]}
                    </Typography>
                </div>
            ))
        }
    </div>
)

storiesOf('Base ', module)
  .add('Colors', () => (
    <MuiThemeProvider theme={SeeTheme}>
        <ColorStory />
    </MuiThemeProvider>
  ))