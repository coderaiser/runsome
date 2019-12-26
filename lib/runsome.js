'use strict';

const {execSync} = require('child_process');
const tryCatch = require('try-catch');
const currify = require('currify');

const rmNewLine = (a) => a.toString().replace(/\n$/, '');

module.exports = currify((name, args, options = {}) => {
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
    
    if (e) {
        return rmNewLine(e.stdout) || rmNewLine(e.stderr);
    }
    
    return rmNewLine(result);
});

