var fs = require('fs-extra');
var path = require('path');
var Promise = require('bluebird');

Promise.promisifyAll(fs);

/**
 *
 * @param   {Object} config Keys: document, characterStyles, colors, swatchRect
 * @param   {String} dist
 * @returns {Promise}
 */
module.exports = function illustratorSwatches(config, dist) {
  return fs
    .readFileAsync(
      path.join(__dirname, '../src/illustrator/swatches.js'),
      'utf-8'
    )
    .then(function (data) {
      var str = 'var config = ' + JSON.stringify(config) + ';\n\n';

      return fs.outputFileAsync(dist, str + data, 'utf-8');
    });
};
