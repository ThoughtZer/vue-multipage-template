module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
          "jsx": true,
        },
        "parser": "babel-eslint",
    },
    "plugins": [
        "vue"
    ],
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
    }
};
