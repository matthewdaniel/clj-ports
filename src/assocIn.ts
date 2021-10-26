import { updateIn } from "./updateIn";
import { constantly } from "./utils/constantly";

export function assocIn<T extends Object,
P1 extends keyof T,
V1 extends T[P1],
P2 extends keyof T[P1] | never,
V2 extends T[P1][P2],
P3 extends keyof T[P1][P2] | never,
V3 extends T[P1][P2][P3],
P4 extends keyof T[P1][P2][P3] | never,
V4 extends T[P1][P2][P3][P4],
P5 extends keyof T[P1][P2][P3][P4] | never,
V5 extends T[P1][P2][P3][P4][P5],
P6 extends keyof T[P1][P2][P3][P4][P5] | never,
V6 extends T[P1][P2][P3][P4][P5][P6],
PS extends [P1]|[P1, P2]|[P1, P2, P3]|[P1, P2, P3, P4]|[P1, P2, P3, P4, P5]|[P1, P2, P3, P4, P5, P6]
>(obj: T, [f, ...path]: PS, val: PS['length'] extends 6 ? V6 :
PS['length'] extends  1 ? V1 :
PS['length'] extends  2 ? V2 :
PS['length'] extends  3 ? V3 :
PS['length'] extends  4 ? V4 :
PS['length'] extends  5 ? V5 :
never): T ;
export function assocIn<T extends Object,
P1 extends keyof T,
V1 extends T[P1],
P2 extends keyof T[P1] | never,
V2 extends T[P1][P2],
P3 extends keyof T[P1][P2] | never,
V3 extends T[P1][P2][P3],
P4 extends keyof T[P1][P2][P3] | never,
V4 extends T[P1][P2][P3][P4],
P5 extends keyof T[P1][P2][P3][P4] | never,
V5 extends T[P1][P2][P3][P4][P5],
P6 extends keyof T[P1][P2][P3][P4][P5] | never,
V6 extends T[P1][P2][P3][P4][P5][P6],
PS extends [P1]|[P1, P2]|[P1, P2, P3]|[P1, P2, P3, P4]|[P1, P2, P3, P4, P5]|[P1, P2, P3, P4, P5, P6]
>([f, ...path]: PS, val: PS['length'] extends 6 ? V6 :
PS['length'] extends  1 ? V1 :
PS['length'] extends  2 ? V2 :
PS['length'] extends  3 ? V3 :
PS['length'] extends  4 ? V4 :
PS['length'] extends  5 ? V5 :
never): (o: T) => T;
export function assocIn(...args: any[]) {
    if (args.length !== 3) {
        return function curriedAssocIn(obj: any) {
            return (assocIn as any)([obj, ...args]);
        }
    } else {
        const [obj, path, v] = args;
        return updateIn(obj, path, constantly(v));
    }
}

// assocIn({a: { b: { c: { d: 'redfd' }}}}, ['a', 'b', 'c', 'd'], (x => ));
// type t = keyof string;
