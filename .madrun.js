import {run} from 'madrun';

export default {
    'test': () => 'tape test/*.js',
    'coverage': () => 'c8 npm test',
    'lint': () => 'putout .',
    'fix:lint': () => run('lint', '--fix'),
    'watcher': () => 'nodemon -w test -w lib --exec',
    'watch:test': async () => await run('watcher', `"${await run('test')}"`),
    'watch:lint': async () => await run('watcher', await run('lint')),
};
