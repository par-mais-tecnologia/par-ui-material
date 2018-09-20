module.exports = {
  env: {
    test: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react'
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties'
      ]
    },
    production: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react'
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties'
      ],
      'ignore': [
        '**/*.test.jsx'
      ]
    }
  }
}
