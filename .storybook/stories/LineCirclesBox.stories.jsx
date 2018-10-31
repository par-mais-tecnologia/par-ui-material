import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'
import { MuiThemeProvider, BioFinanceiraTheme, LineCirclesBox } from '../../src'
import withTests from './withTests'

class LineCirclesBoxStory extends PureComponent {
  render() {
    const { children } = this.props
    return (
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

    const mockText = text('Text content', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eufugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseruntmollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eufugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseruntmollit anim id est laborum.\'')

    return (
      <div>
        <LineCirclesBoxStory>
          <LineCirclesBox lineColor={text('lineColor', '#000')}>
            {mockText}
          </LineCirclesBox>
        </LineCirclesBoxStory>
        <LineCirclesBoxStory>
          <LineCirclesBox lineColor={text('lineColor', '#F00')}>
            {mockText}
          </LineCirclesBox>
        </LineCirclesBoxStory>
      </div>

    )
  })