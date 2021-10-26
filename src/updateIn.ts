export function updateIn<T extends Object,
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
>(obj: T, [f, ...path]: PS, updater: ((v: PS['length'] extends 6 ? V6 :
PS['length'] extends  1 ? V1 :
PS['length'] extends  2 ? V2 :
PS['length'] extends  3 ? V3 :
PS['length'] extends  4 ? V4 :
PS['length'] extends  5 ? V5 :
never) => PS['length'] extends 6 ? V6 :
PS['length'] extends  1 ? V1 :
PS['length'] extends  2 ? V2 :
PS['length'] extends  3 ? V3 :
PS['length'] extends  4 ? V4 :
PS['length'] extends  5 ? V5 :
never)): T ;
export function updateIn<T extends Object,
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
>([f, ...path]: PS, updater: ((v: PS['length'] extends 6 ? V6 :
PS['length'] extends  1 ? V1 :
PS['length'] extends  2 ? V2 :
PS['length'] extends  3 ? V3 :
PS['length'] extends  4 ? V4 :
PS['length'] extends  5 ? V5 :
never) => PS['length'] extends 6 ? V6 :
PS['length'] extends  1 ? V1 :
PS['length'] extends  2 ? V2 :
PS['length'] extends  3 ? V3 :
PS['length'] extends  4 ? V4 :
PS['length'] extends  5 ? V5 :
never)): (o: T) => T ;
export function updateIn(maybeObj: any, path?: any, updater?: any) {
    if (!updater) {
        return function curriedUpdateIn(obj: any) {
            return updateIn(obj, maybeObj, path!);
        }
    } else {
        function updateDeep(o: Object|scalar, [p, ...rest]: any[]): any {
            if (!o || typeof o !== 'object') return o;
            if (!(p in o)) return o;

            return {
                ...o,
                [p]: rest.length ? updateDeep((o as any)[p], rest) : updater((o as any)[p])
            }
        }
        return updateDeep(maybeObj, path);
    }
}

// updateIn({a: { b: { c: { d: 'redfd' }}}}, ['a', 'b', 'c', 'd'], (x => ));

// type t = keyof string;
