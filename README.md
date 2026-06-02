# Runsome [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL]

[NPMIMGURL]: https://img.shields.io/npm/v/runsome.svg?style=flat
[BuildStatusURL]: https://github.com/coderaiser/runsome/actions?query=workflow%3A%22Node+CI%22 "Build Status"
[BuildStatusIMGURL]: https://github.com/coderaiser/runsome/workflows/Node%20CI/badge.svg
[LicenseIMGURL]: https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[NPMURL]: https://npmjs.org/package/runsome "npm"
[LicenseURL]: https://tldrlegal.com/license/mit-license "MIT License"

Run some `cli` and get output. Good for testing.

## Install

```
npm i runsome
```

## How to use?

```js
import {runsome} from 'runsome';

runsome('node', '-v');
// returns
'v13.5.0';
// runsome already curried
const run = runsome('node');
run('-v');
// returns
'v13.5.0';
```

## License

MIT
