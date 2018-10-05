import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'
import { MuiThemeProvider, BioFinanceiraTheme } from '../../src'

import withTests from './withTests'
import { LineCirclesBox } from '../../src'

class LineCirclesBoxStory extends PureComponent {
  render() {
    const { children } = this.props
    return(
      <div className="pa3 w-100">
        <MuiThemeProvider theme={BioFinanceiraTheme}>
          <div>
            {children}
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

storiesOf('LineCirclesBox', module)
  .addDecorator(withTests('LineCirclesBox'))
  .addDecorator(withKnobs)
  .add('shallow', () => {
    return (
      <LineCirclesBoxStory>
        <LineCirclesBox lineColor={text('lineColor', '#7fbd42')}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </LineCirclesBox>
      </LineCirclesBoxStory>
    )
  })