# `yaml-merge`

A super simple tool for merging `yaml` files.

## Installation

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

## Requirements

This package was developed against Node 6.7.0, so that's what's recommended. It required some newer Node versions, such as the [spread operator][spread-operator] and [template strings][template-strings]. Other versions may work, too.

[spread-operator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
[template-strings]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
