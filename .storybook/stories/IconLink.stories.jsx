import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import { number, text, withKnobs } from '@storybook/addon-knobs'
import { MuiThemeProvider, BioFinanceiraTheme } from '../../src'
import withTests from './withTests'
import { IconLink } from '../../src'

class IconLinkStory extends PureComponent {
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

storiesOf('IconLink', module)
  .addDecorator(withTests('IconLink'))
  .addDecorator(withKnobs)
  .add('shallow', () => {

    return (
      <div>
        <IconLinkStory>
          <IconLink
            color={text('color', '#909090')}
            fontSize={number('fontSize', 15)}
            icon={text('icon', 'reload')}
            onClick={action('Clicou e executou função!')}
            text={text('text', 'Refazer BIO')}
            />
        </IconLinkStory>
      </div>
    )
  })