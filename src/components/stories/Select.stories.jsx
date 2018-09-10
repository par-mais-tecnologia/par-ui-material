import { storiesOf } from '@storybook/react'
import Select from '../Inputs/Select/select'
import React, { PureComponent } from 'react'
import { decorateAction } from '@storybook/addon-actions'
import MenuItem from '@material-ui/core/MenuItem'
import withTests from './withTests'

class SelectStory extends PureComponent {
  state = {
    value: false
  }

  handleSelectChange = decorateAction([args => {
    this.setState({ value: args[0].target.value })
    return args
  }])

  render () {
    const { value } = this.state

    return (
      <Select
        id='SelectId'
        label='Campo Select'
        value={value}
        onChange={this.handleSelectChange('valor selecionado')}>
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Dez</MenuItem>
        <MenuItem value={20}>Vinte</MenuItem>
        <MenuItem value={30}>Trinta</MenuItem>
      </Select>
    )
  }
}

storiesOf('Input', module)
  .addDecorator(withTests('select'))
  .add('Select', () => {
    return <SelectStory />
  })
