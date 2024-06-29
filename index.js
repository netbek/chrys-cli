import fs from 'fs-extra';
import path from 'path';
import {fileURLToPath} from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 *
 * @param   {Object} config - Keys: document, characterStyles, colors, swatchRect
 * @param   {string} dist
 * @returns {Promise}
 */
export async function illustratorSwatches(config, dist) {
  let data = await fs.readFile(
    path.join(__dirname, 'src/illustrator/swatches.js'),
    'utf-8'
  );
  data = 'var config = ' + JSON.stringify(config) + ';\n\n' + data;

  return fs.outputFile(dist, data, 'utf-8');
}
