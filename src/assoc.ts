export function assoc<T extends Object, P extends keyof T>(o: T, prop: P, v: T[P]): T;
export function assoc<T extends Object, P extends keyof T>(prop: P, v: T[P]): (obj: T) => T;

export function assoc(...args: any[]): any {
    if (args.length !== 3) {
        return function curriedAssoc(o: any) { return (assoc as any)([o, ...args])};
    } else {
        const [o, k, v] = args;
        return {
            ...o,
            [k]: v
        }
    }
}