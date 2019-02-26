import React from 'react'
import { storiesOf } from '@storybook/react'
import { SeeTheme, MuiThemeProvider } from '../../../src'
import { Typography } from '@material-ui/core';
import style from '../style'

const FontStory = () => (
    <div style={style.section}>
        {
            Object.keys(SeeTheme.styles.fonts).map( key => (
                <div style={style.sectionItemWrapper} key={key}>
                    <div style={style.sectionItem}>
                        <div style={
                            SeeTheme.styles.fonts[key].color === '#ffffff'
                            ? style.whiteTypography : style.typography
                        }>
                            <Typography variant={key}>
                                Abc
                            </Typography>
                        </div>
                        <Typography variant='body1'>
                            &lt;
                                <span style={style.tag}>Typography </span>
                                <span style={style.attr}>variant</span>=
                                <span style={style.value}>'{key}'</span>
                            &gt;
                        </Typography>
                    </div>
                    <div>
                        <Typography variant='overline' style={style.details}>
                            Style
                        </Typography>
                        {
                            Object.keys(SeeTheme.styles.fonts[key]).map((attr, i) => (
                                <Typography variant='caption' key={i}>
                                {attr}: {SeeTheme.styles.fonts[key][attr]}
                                </Typography>
                            ))
                        }
                    </div>
                </div>
            ))
        }
    </div>
)

storiesOf('Base ', module)
  .add('Typography', () => (
    <MuiThemeProvider theme={SeeTheme}>
        <FontStory />
    </MuiThemeProvider>

  ))
