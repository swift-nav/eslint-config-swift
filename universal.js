module.exports = {
  "extends": "./index.js",
  "rules": {
    // until we find a better alternative, there's no problem with console.log in universal apps
    // it's much worse for electron where console logs are swallowed / invisible in production mode
    "no-console": 0
  }
};
