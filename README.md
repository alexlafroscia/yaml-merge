# `yaml-merge`

[![Build Status](https://travis-ci.org/alexlafroscia/yaml-merge.svg?branch=master)](https://travis-ci.org/alexlafroscia/yaml-merge)
![Node Version](https://img.shields.io/badge/node-6.7.0+-green.svg)

A super simple tool for merging YAML files.

## Installation

Node v6 or higher is required.

### For the command line

```bash
npm install -g @alexlafroscia/yaml-merge
```

### For use through Node

```bash
npm install --save @alexlafroscia/yaml-merge
```

## Usage

`yaml-merge` takes a series of `yaml` files and merges them from left to right.  This means that the first file will be overwritten by properties of the second, which is overwritten by properties of the third, etc.

### Command Line

When using this tool from the command line, the output file will simply be written to `STDOUT`

```bash
yaml-merge test/fixtures/basic/a.yml test/fixtures/basic/b.yml
a:
  foo: bar
b:
  foo: bar
```

This way, you can pipe the output to whatever you want. For example, this will write the new `yaml` file to `output.yml`

```bash
yaml-merge test/fixtures/basic/a.yml test/fixtures/basic/b.yml > output.yml
```

The provided file names will be resolved relative to the current directory. So, you an provide a relative path to the files, or an absolute path -- either method works just fine.

### As a Node package

`yaml-merge` also provides a `node` package that can be consumed to get the output file programmatically.

```javascript
const resolve = require('path').resolve;
const merge = require('yaml-merge');

const output = merge(resolve('relative/path/to/file.yml'), '/Users/you/some/other/file.yml');
console.log(output); // Writes out the resulting file, as a string
```
