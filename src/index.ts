import { condp } from './condp';
import { cond } from './cond';
import { case$ } from './case$';
import { even } from './utils/even';
import { odd } from './utils/odd';
import { if$ } from './utils/if';
import { identity } from './utils/identity';
import { when } from './when';
import { instance } from './instance';

console.log('yo-here', '\n'.repeat(3), { condp, cond }, typeof cond)
export const fns = {
    cond, condp, identity, when,
    "case": case$,
    "even?": even,
    "odd?": odd,
    "if": if$,
    "instance?": instance,
}