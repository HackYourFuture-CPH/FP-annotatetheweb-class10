module.exports = {
  extends: ['./node_modules/poetic/config/eslint/eslint-config.js'],
  // Add custom rules here
  rules: {
    'arrow-parens': 0,
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    'no-unexpected-multiline': 0,
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 1,
    'react/prop-types': 1,
    'import/prefer-default-export': 0,
    '@typescript-eslint/camelcase': 1,
    'func-names': 0,
    '@typescript-eslint/no-var-requires': 0,
    'no-restricted-globals': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'no-use-before-define': 0,
    'consistent-return': 0,
    'jsx-a11y/label-has-associated-control': 0,
  },
};
