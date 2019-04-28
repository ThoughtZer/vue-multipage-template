module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "mocha": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/essential"
  ],
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module",
  },
  "rules": {
    // "comma-dangle": ["warn", "always-multiline"],
    "indent": ["warn", 2],
    "linebreak-style": ["warn", "unix"],
    "quotes": ["warn", "single"],
    "semi": ["warn", "always"],
    "no-unused-vars": ["warn"],
    "no-console": 0,
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'eol-last': 0,
    'space-before-function-paren': 0
  },
};
