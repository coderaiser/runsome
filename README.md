# Runsome [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL]

Run some `cli` and get output. Good for testing.

## Install

```
npm i runsome
```

## How to use?

```js
const runsome = require('runsome');

runsome('node', '-v');
// returns
'v13.5.0'

// runsome already curried
const run = runsome('node');
run('-v');
// returns
'v13.5.0'
```

## License

MIT

[NPMIMGURL]:                https://img.shields.io/npm/v/runsome.svg?style=flat
[BuildStatusIMGURL]:        https://img.shields.io/travis/coderaiser/runsome/master.svg?style=flat
[DependencyStatusIMGURL]:   https://img.shields.io/david/coderaiser/runsome.svg?style=flat
[LicenseIMGURL]:            https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[NPMURL]:                   https://npmjs.org/package/runsome "npm"
[BuildStatusURL]:           https://travis-ci.org/coderaiser/runsome  "Build Status"
[DependencyStatusURL]:      https://david-dm.org/coderaiser/runsome "Dependency Status"
[LicenseURL]:               https://tldrlegal.com/license/mit-license "MIT License"
