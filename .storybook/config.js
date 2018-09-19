import { configure } from '@storybook/react'

const req = require.context('./stories', true, /\.stories\.jsx$/)
configure(loadStories, module)

function loadStories () {
  req.keys().forEach((filename) => req(filename))
}

