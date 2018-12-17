const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/js/index.js'),

  output: {
    path: path.join(__dirname, 'src/assets'),
    filename: 'index.js'
  }
};