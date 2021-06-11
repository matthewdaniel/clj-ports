import { fns } from ".";
import { i } from "./invoke";
import { IllegalArgumentException } from "./utils/errors";
import { odd } from "./utils/odd";

type predfn<T1, T2> = (clauseVal: T1, testVal: T2) => boolean

export function condp<T1>(pred: predfn<T1, any>, exp: T1, ...clauses: any[]) {
    const retIdx = clauses.slice(0, -1).findIndex((test, idx) => i('even?', idx) && pred(test, exp) === true) + 1;
    if (retIdx) return clauses[retIdx];
    if (odd(clauses.length)) return clauses[clauses.length - 1]
    throw new IllegalArgumentException;
}