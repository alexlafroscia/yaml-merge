# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.0.0](https://github.com/alexlafroscia/yaml-merge/compare/v2.0.0...v3.0.0) (2020-10-16)


### ⚠ BREAKING CHANGES

* Arrays are merged, rather than overwritten

* Fix #12 by adding a _.mergeWith customizer function ([dde8b24](https://github.com/alexlafroscia/yaml-merge/commit/dde8b24ddeaf2ef5629185ede7fcd0d2530c56c6)), closes [#12](https://github.com/alexlafroscia/yaml-merge/issues/12)

## [2.0.0](https://github.com/alexlafroscia/yaml-merge/compare/v1.0.4...v2.0.0) (2020-03-25)


### ⚠ BREAKING CHANGES

* The code will likely still work with older versions of
Node, but we're now only testing against the current LTS release.

* bump minimum node version ([1e0f9ea](https://github.com/alexlafroscia/yaml-merge/commit/1e0f9eaacb814ebf8ca5edf861e1bca506fc74e9))
