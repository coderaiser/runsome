import {run} from 'madrun';

export default {
    'test': () => 'tape test/*.js',
    'coverage': () => 'c8 npm test',
    'report': () => 'c8 report --reporter=lcov',
    'lint': () => 'putout .',
    'fix:lint': () => run('lint', '--fix'),
    'postfix:lint': () => 'redlint fix',
    'watcher': () => 'nodemon -w test -w lib --exec',
    'watch:test': async () => await run('watcher', `"${await run('test')}"`),
    'watch:lint': async () => await run('watcher', await run('lint')),
};
