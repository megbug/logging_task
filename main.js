import { logging } from './lib.js';
import { logErr } from './lib.js';
import { logInfo } from './lib.js';
import { logWarn } from './lib.js';

// testing

let x = 5 + 5
let y = 'show me results';

logging('na')
logging(x, 'error');
logging(y, 'info');
logging('abc', 'warn');

logErr('ich bin ein error');
logInfo('ich bin eine info');
logWarn('ich bin ein warning');




