export function dissocIn<T extends Object,
P1 extends keyof T, 
P2 extends keyof T[P1] | never,
P3 extends keyof T[P1][P2] | never,
P4 extends keyof T[P1][P2][P3] | never,
P5 extends keyof T[P1][P2][P3][P4] | never,
P6 extends keyof T[P1][P2][P3][P4][P5] | never>(obj: T, [f, ...path]: [P1?, P2?, P3?, P4?, P5?, P6?]): T;
export function dissocIn<T extends Object,
P1 extends keyof T, 
P2 extends keyof T[P1] | never,
P3 extends keyof T[P1][P2] | never,
P4 extends keyof T[P1][P2][P3] | never,
P5 extends keyof T[P1][P2][P3][P4] | never,
P6 extends keyof T[P1][P2][P3][P4][P5] | never>([f, ...path]: [P1?, P2?, P3?, P4?, P5?, P6?]): (obj: T) => T;
export function dissocIn(pathOrObj: any, pathOrObj2?: any) {
    if (pathOrObj2 === undefined) {
        return function curriedDissoc(obj: any) {
            return dissocIn(obj, pathOrObj);
        } 
    } else {
        const [f, ...path] = pathOrObj2;
        const obj = pathOrObj;

        const k: any = f;
        // we couldn't get to the terminal point
        if (!(k in obj)) return obj;

        if (!path.length) {
            // we've finally got to the terminal point
            const { [k]: _, ...withoutK } = obj;
            return withoutK;
        };

        // keep descending
        return {
            ...obj,
            [k]: dissocIn((obj as any)[k], path)
        } as any;
    }
}