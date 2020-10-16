'use strict';

const readFileSync = require('fs').readFileSync;
const jsYaml = require('js-yaml');
const _ = require('lodash');

function readAsJSON(fileName) {
  const fileBuffer = readFileSync(fileName);
  const fileString = fileBuffer.toString();

  return jsYaml.load(fileString);
}

/**
 * Merge the given YAML file names into a single YAML document
 *
 * @param {array} from the file paths to read from
 * @return {string} the output YAML file
 */
function yamlMerge(...from) {
  const files = from.map((path) => readAsJSON(path));

  const outputJSON = _.mergeWith({}, ...files, (objValue, srcValue, key, object, source, stack) => {
    if (Array.isArray(objValue) && Array.isArray(srcValue)) return [...objValue, ...srcValue];
    return undefined; // handle it just like with _.merge
  })
  return jsYaml.dump(outputJSON);
}

module.exports = yamlMerge;
