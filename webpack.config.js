const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      "path": false
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
      }
    ]
  }
};
