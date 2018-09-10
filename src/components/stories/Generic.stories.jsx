
import { storiesOf } from '@storybook/react';
import Generic from '../Inputs/Generic/generic'
import React, { PureComponent } from 'react';
import { decorateAction } from '@storybook/addon-actions'
import withTests from './withTests'

class GenericStory extends PureComponent {
    state = {
        value: ''
    };

    handleGenericChange = decorateAction([args => {
        this.setState({ value: args[0].target.value });
        return args;
    }]);

    render() {
        const { value } = this.state;

        return (
            <Generic
                id="GenericId"
                label="Campo Genérico"
                value={value}
                onChange={this.handleGenericChange('Valor genérico alterado')}
            />
        );
    }
}

storiesOf('Input', module)
  .addDecorator(withTests('generic'))
  .add('Livre', () => {
        return <GenericStory/>
    });
