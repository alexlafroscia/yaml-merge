#!/usr/bin/env node

'use strict';

const resolve = require('path').resolve;
const yamlMerge = require('../index.js');

const files = process.argv
  .slice(2)
  .map((path) => resolve(path));
const outputFile = yamlMerge(...files);

process.stdout.write(outputFile);
