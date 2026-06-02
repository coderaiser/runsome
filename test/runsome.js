import process from 'node:process';
import {test} from 'supertape';
import {runsome} from '../lib/runsome.js';

test('runsome: two args', (t) => {
    const result = runsome('node', '-v');
    const {version} = process;
    
    t.equal(result, version);
    t.end();
});

test('runsome: stderr', (t) => {
    const result = runsome('ls', 'xxx');
    const expected = `ls: cannot access 'xxx': No such file or directory`;
    
    t.equal(result, expected);
    t.end();
});
