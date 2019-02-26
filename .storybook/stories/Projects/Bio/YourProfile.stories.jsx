import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { text, object, withKnobs } from '@storybook/addon-knobs'
import { MuiThemeProvider, BioFinanceiraTheme, YourProfile, NumberedTitle } from '../../../../src'
import { yourProfileMock as mock } from '../../../../src/Core/mocks'
import withTests from '../../withTests'

class YourProfileStory extends PureComponent {
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

storiesOf('Projects / Bio ', module)
  .addDecorator(withTests('YourProfile'))
  .addDecorator(withKnobs)
  .add('YourProfile', () => {
    return (
      <YourProfileStory>
        <YourProfile
          profile={text('profile', mock.profile)}
          justification={text('justification', mock.justification)}
          options={object('options', mock.options)}
        />
      </YourProfileStory>
    )
  })