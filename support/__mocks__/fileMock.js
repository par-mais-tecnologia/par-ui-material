// module.exports = 'test-file-stub'
const path = require('path')

const reactNullComponent = `
  require('react').createClass({
    render() {
      return null;
    }
  })
`

module.exports = {
  process: (_, filename) => {
    if (/.*\.svg/gm.test(filename)) {
      return `module.exports = ${reactNullComponent}`
    }
    return `module.exports = '${JSON.stringify(path.basename(filename))}';`
  }
}
