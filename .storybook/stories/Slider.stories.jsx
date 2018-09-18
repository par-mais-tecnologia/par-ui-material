import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import MuiThemeProvider from '@material-ui/core/es/styles/MuiThemeProvider'

import { BioFinanceiraTheme, Slider } from '../../src'

class SliderStories extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      value: 1
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event, value) {
    this.setState({ value })
  }

  render() {
    return (
      <MuiThemeProvider theme={BioFinanceiraTheme}>
        <div style={{width: '400px', padding: '10px 10px 10px 10px'}}>
          <Slider 
            max={5}
            value={this.state.value}
            handleChange={this.handleChange}
          />
        </div>
      </MuiThemeProvider>
    )
  }
}

storiesOf('Slider', module)
  .add('finBio Slider', () => {
    return (<SliderStories/>)
  })