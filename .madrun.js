'use strict';

const {run} = require('madrun');

module.exports = {
    'test': () => 'tape test/*.js',
    'coverage': () => 'nyc npm test',
    'lint': () => 'putout .',
    'fix:lint': () => run('lint', '--fix'),
    'watcher': () => 'nodemon -w test -w lib --exec',
    'watch:test': () => run('watcher', run('test')),
    'watch:lint': () => run('watcher', run('lint')),
};

