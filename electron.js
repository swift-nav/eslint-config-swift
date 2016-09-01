module.exports = {
  "extends": "./index.js"
  "rules": {
    "import/no-unresolved": [2, { "ignore": ["electron"], "commonjs": true }]
  }
};
