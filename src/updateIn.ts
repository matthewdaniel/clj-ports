// todo. see if there is a way to get the function typed.
export function updateIn<T extends Object,
P1 extends keyof T, 
V1 extends Required<T[P1]>,
P2 extends keyof V1 | never,
V2 extends Required<V1[P2]>,
P3 extends keyof V1[P2] | never,
V3 extends Required<V2[P3]>,
P4 extends keyof V2[P3] | never,
V4 extends Required<V3[P4]>,
P5 extends keyof V3[P4] | never,
V5 extends Required<V4[P5]>,
P6 extends keyof V4[P5] | never, 
V6 extends never,
FN extends (v: any) => any,
>(obj: T, path: [P1?, P2?, P3?, P4?, P5?, P6?], fn: FN) : T;
export function updateIn<T extends Object,
P1 extends keyof T, 
V1 extends Required<T[P1]>,
P2 extends keyof V1 | never,
V2 extends Required<V1[P2]>,
P3 extends keyof V1[P2] | never,
V3 extends Required<V2[P3]>,
P4 extends keyof V2[P3] | never,
V4 extends Required<V3[P4]>,
P5 extends keyof V3[P4] | never,
V5 extends Required<V4[P5]>,
P6 extends keyof V4[P5] | never, 
V6 extends never,
FN extends (v: any) => any,
>(path: [P1?, P2?, P3?, P4?, P5?, P6?], fn: FN): (obj: T) => T;
export function updateIn(...args: any[]) {
    if (args.length === 2) {
        return function curriedUpdateIn(obj: any) {
            return (updateIn as any)(obj, ...args);
        }
    } else {
        const [o, path, updater] = args as [Object, string[], (x: any) => any];
        
        function updateDeep(o: Object|scalar, [p, ...rest]: any[]): any {
            if (p === fin) {
                const nextVal = updater(o);
                if (nextVal === o) throw new UnchangedError;
                return nextVal;
            }

            return {
                ...(o as any),
                [p]: updateDeep((o as any)[p], rest)
            }
        }
        try {
            return updateDeep(o, path.concat([fin]));
        } catch (e) {
            if (e instanceof UnchangedError) return o;
            throw e;
        }
    }
}
class UnchangedError extends Error {};
const fin = '5e6fc9d6-1595-40c8-884d-6fd0cff01f7a';

// updateIn({a: { 
//     c: { d: 1},
//     b: { c: { d: 'redfd' }}}}, ['a', 'b', ''], (x => ));

// type t = keyof string;
