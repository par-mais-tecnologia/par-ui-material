
import { storiesOf } from '@storybook/react';
import CheckBox from '../Inputs/CheckBox/checkBox'
import React, { PureComponent } from 'react';
import { decorateAction } from '@storybook/addon-actions'

class CheckBoxStory extends PureComponent {
    state = {
        checked: false,
    };

    handleCheckedChange = decorateAction([args => {
        this.setState({ checked: args[1] });
        return args;
    }]);

    render() {
        const { checked } = this.state;

        return (
            <CheckBox
                checked={checked}
                onChange={this.handleCheckedChange('marquei a caixa')}
                value="checked"
            />
        );
    }
}

storiesOf('Input', module)
    .add('CheckBox', () => {
        return <CheckBoxStory/>
    });
