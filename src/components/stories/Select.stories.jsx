import { storiesOf } from '@storybook/react'
import Select from '../Inputs/Select/select'
import React, { PureComponent } from 'react'
import { decorateAction } from '@storybook/addon-actions'
import MenuItem from '@material-ui/core/MenuItem'
import withTests from './withTests'

class SelectStory extends PureComponent {
  state = {
    value: ''
  }

  handleSelectChange = decorateAction([args => {
    this.setState({ value: args[0].target.value })
    return args
  }])

  render () {
    const { value } = this.state

    return (
        <div>
            <h5> Normal </h5>
            <Select
                id='SelectId'
                label='Campo Select'
                value={value}
                onChange={this.handleSelectChange('valor selecionado')}
                minWidth={120}>
                <MenuItem value=''>
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Dez</MenuItem>
                <MenuItem value={20}>Vinte</MenuItem>
                <MenuItem value={30}>Trinta</MenuItem>
            </Select>

            <h5> Com texto de apoio </h5>
            <Select
                id='SelectId'
                label='Campo Select'
                value={value}
                onChange={this.handleSelectChange('valor selecionado')}
                minWidth={120}
                showLabel={false}
                showError={true}
                errorMessage={'Texto de apoio'}>
                <MenuItem value=''>
                    <em>None</em>
                </MenuItem>
                <MenuItem value={40}>Quarenta</MenuItem>
                <MenuItem value={888}>Oitocentos e oitenta e oito</MenuItem>
                <MenuItem value={200}>Duzentos</MenuItem>
            </Select>

            <h5> Com label </h5>
            <Select
                id='SelectId'
                label='Campo Select'
                value={value}
                onChange={this.handleSelectChange('valor selecionado')}
                minWidth={120}
                showLabel={true}>
                <MenuItem value=''>
                    <em>None</em>
                </MenuItem>
                <MenuItem value={40}>Quarenta</MenuItem>
                <MenuItem value={888}>Oitocentos e oitenta e oito</MenuItem>
                <MenuItem value={200}>Duzentos</MenuItem>
            </Select>

            <h5> Erro </h5>
            <Select
                error = {true}
                value={value}
                onChange={this.handleSelectChange('valor selecionado')}
                minWidth={120}
                renderValue={value => `⚠️  - ${value}`}>
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value="hai">Hai</MenuItem>
                <MenuItem value="olivier">Olivier</MenuItem>
                <MenuItem value="kevin">Kevin</MenuItem>
            </Select>
        </div>

    )
  }
}

storiesOf('Input', module)
  .addDecorator(withTests('select'))
  .add('Select', () => {
    return <SelectStory />
  })
