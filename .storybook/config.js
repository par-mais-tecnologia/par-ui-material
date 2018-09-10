import { configure } from '@storybook/react'

const req = require.context('../src/components/stories', true, /\.stories\.jsx$/)
configure(loadStories, module)

function loadStories () {
  req.keys().forEach((filename) => req(filename))
}

