import { storiesOf } from '@storybook/react'
import { BioFinanceiraTheme, Select, MenuItem, Button, MuiThemeProvider } from '../../src'
import React, { PureComponent } from 'react'
import { decorateAction } from '@storybook/addon-actions'
import withTests from './withTests'
import * as validation from '../../src/Core/validation'

const validator = new validation.Validator()

class SelectStory extends PureComponent {
  state = {
    value: ''
  }

  handleSelectChange = decorateAction([args => {
    this.setState({value: args[0].target.value})
    return args
  }])

  render () {
    const {value} = this.state

    return (
      <div className='pl3'>
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
          showError
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
          showLabel>
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={40}>Quarenta</MenuItem>
          <MenuItem value={888}>Oitocentos e oitenta e oito</MenuItem>
          <MenuItem value={200}>Duzentos</MenuItem>
        </Select>

        <h5> Erro </h5>
        <Select
          error
          value={value}
          onChange={this.handleSelectChange('valor selecionado')}
          minWidth={120}
          renderValue={value => `⚠️  - ${value}`}>
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value='hai'>Hai</MenuItem>
          <MenuItem value='olivier'>Olivier</MenuItem>
          <MenuItem value='kevin'>Kevin</MenuItem>
        </Select>

        <h5> Com validação </h5>
        <Select
          required
          validator={{validator, type: validation.types.required}}
          value={value}
          onChange={this.handleSelectChange('valor selecionado')}
          minWidth={120}
          renderValue={value => `⚠️  - ${value}`}>
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value='hai'>Hai</MenuItem>
          <MenuItem value='olivier'>Olivier</MenuItem>
          <MenuItem value='kevin'>Kevin</MenuItem>
        </Select>

        <div className='mv4'>
          <h5> Com tema e validação</h5>
          <MuiThemeProvider theme={BioFinanceiraTheme}>
            <Select
              required
              validator={{validator, type: validation.types.required}}
              value={value}
              onChange={this.handleSelectChange('valor selecionado')}
              minWidth={120}
              renderValue={value => `⚠️  - ${value}`}>
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value='hai'>Hai</MenuItem>
              <MenuItem value='olivier'>Olivier</MenuItem>
              <MenuItem value='kevin'>Kevin</MenuItem>
            </Select>
          </MuiThemeProvider>
        </div>

        <Button onClick={validator.validate} variant='contained'>
          Validate
        </Button>
      </div>

    )
  }
}

storiesOf('Input', module)
  .addDecorator(withTests('Select'))
  .add('Select', () => {
    return <SelectStory/>
  })
