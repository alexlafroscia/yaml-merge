/* eslint-env mocha */

'use strict';

const resolve = require('path').resolve;
const expect = require('chai').expect;
const stripIndent = require('common-tags').stripIndent;
const merge = require('../index.js');

function fixtureFiles(...names) {
  return names.map((fileName) => resolve(__dirname, './fixtures', fileName));
}

describe('merge logic', function() {
  it('merges multiple YAML files', function() {
    const output = merge(...fixtureFiles('basic/a.yml', 'basic/b.yml'));

    expect(output).to.equal(stripIndent`
      a:
        foo: bar
      b:
        foo: bar
    ` + '\n');
  });

  it('overwrites properties from left to right', function() {
    const output = merge(...fixtureFiles('overwrite/a.yml', 'overwrite/b.yml', 'overwrite/c.yml'));

    expect(output).to.equal(stripIndent`
      key:
        value: c
    ` + '\n');
  });

  it('allows keys to trickle in from all merge sources', function () {
    const output = merge(...fixtureFiles('merge/a.yml', 'merge/b.yml'));
    
    expect(output).to.equal(stripIndent`
      key:
        first_value: a
        second_value: b
    ` + '\n');
  });
});

