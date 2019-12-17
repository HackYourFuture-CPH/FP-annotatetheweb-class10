module.exports = {
  extends: ['./node_modules/poetic/config/eslint/eslint-config.js'],
  // Add custom rules here
  rules: {
    'arrow-parens': 0,
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    'no-unexpected-multiline': 0,
  },
};
