const babelJest = require('babel-jest')
const webpackPolyfill = require('./webpack_polyfill')

module.exports = {
  process (src, filename, config, transformOptions) {
    return [
      webpackPolyfill,
      babelJest]
      .reduce((_src, curr) => {
        _src = curr.process(_src, filename, config, transformOptions)
        return _src
      }, src)
  }
}
