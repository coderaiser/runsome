import {execSync} from 'node:child_process';
import {tryCatch} from 'try-catch';
import currify from 'currify';

const rmNewLine = (a) => a
    .toString()
    .replace(/\n$/, '');

export const runsome = currify((name, args, options = {}) => {
    const {
        timeout = 0,
        stdio = [null, null, null],
        ...props
    } = options;
    
    const [e, result] = tryCatch(execSync, `${name} ${args}`, {
        timeout,
        stdio,
        ...props,
    });
    
    if (e)
        return rmNewLine(e.stdout) || rmNewLine(e.stderr);
    
    return rmNewLine(result);
});
