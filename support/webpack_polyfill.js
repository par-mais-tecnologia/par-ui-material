module.exports = {
  process (src, filename, config, transformOptions) {
    let _src = src
    // Return original document if don't have reference to require.context.
    if (/require\.context\(.*\)/gm.test(src)) {
      /* eslint-disable */
      _src = `if (typeof require.context === 'undefined') {
        require.context = () => { 
          return {
            keys: () => []
          } 
        }
        }
    ${src}`
    }
    /* eslint-enable */

    return _src
  }
}
