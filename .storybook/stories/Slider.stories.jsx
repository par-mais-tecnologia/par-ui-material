import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { MuiThemeProvider } from '@material-ui/core'

import { BioFinanceiraTheme, Slider } from '../../src'
import * as validation from '../../src/Core/validation'

const validator = new validation.Validator()

class SliderStories extends PureComponent {
    state = {
      value: 2
    }

  handleChange(event, value) {
    this.setState({ value })
  }

  render() {

    const { errorMessage } = this.props

    return (
        <div style={{width: '400px', padding: '10px 10px 10px 10px', marginTop: 100, marginLeft: 40}}>
          <Slider
            required={true}
            validator={{validator, type: validation.types.required}}
            errorMessage={errorMessage}
            max={5}
            value={this.state.value}
            onChange={(evt, value) => this.handleChange(evt, value)}
          />
        </div>
    )
  }
}

storiesOf('Slider', module)
  .add('finBio Slider', () => {
    return (
      <SliderStories
        errorMessage={'Campo Obrigatório'}
      />
    )
  })