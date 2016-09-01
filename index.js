module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "browser": true,
    "mocha": true,
    "node": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "prefer-template": 0,
    "consistent-return": 0,
    "comma-dangle": 0,
    "space-before-function-paren": 0,
    "no-use-before-define": 0,
    "import/no-unresolved": [2, { "commonjs": true }],
    "import/named": 2,
    "import/default": 2,
    "import/namespace": [2, { "allowComputed": true }],
    "import/export": 2,
    "import/no-named-as-default": 2,
    "import/no-named-as-default-member": 2,
    "import/no-deprecated": 2,
    "import/no-extraneous-dependencies": 0,
    "import/no-mutable-exports": 2,
    "react/jsx-no-bind": 0,
    "react/prefer-stateless-function": 0,
    "no-underscore-dangle": 2,
    "arrow-body-style": [2, "as-needed"],
    "no-multi-spaces": 0,
    "no-console": 2,
    "no-alert": 2
  },
  "plugins": [
    "import",
    "react"
  ],
  "settings": {
    "import/resolver": "webpack",
    "import/resolve": {
      "extensions": [".es6", ".js", ".jsx", ".ts", ""]
    },
    "import/extensions": [".js", ".jsx", ".es6", ".ts", ""]
  }
};
