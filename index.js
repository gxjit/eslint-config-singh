module.exports = {
  extends: [
    'eslint-config-airbnb-base/rules/best-practices',
    'eslint-config-airbnb-base/rules/errors',
    'eslint-config-airbnb-base/rules/node',
    'eslint-config-airbnb-base/rules/style',
    'eslint-config-airbnb-base/rules/variables',
    'eslint-config-airbnb-base/rules/es6',
    'eslint-config-airbnb-base/rules/strict',
    './base-overwrites'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018, // ES9
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
      generators: true,
      objectLiteralDuplicateProperties: false
    },
    env: {
      es6: true,
      browser: true,
      node: true
    }
  }
}
