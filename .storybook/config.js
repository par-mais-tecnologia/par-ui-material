import {configure} from '@storybook/react';
import {describe, it} from 'storybook-addon-specifications';
import expect from 'expect';

window.describe = describe;
window.it = it;
window.expect = expect;

const req = require.context('../src/components/stories', true, /\.stories\.jsx$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);