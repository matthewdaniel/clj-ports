export function update<T extends Object, P extends keyof T>(o: T, k: P, updater: (v: T[P]) => T[P]): T;
export function update<T extends Object, P extends keyof T>(k: P, updater: (v: T[P]) => T[P]): (obj: T) => T;
export function update(...args: any[]): any {
    if (args.length === 2) {
        return function curriedUpdate(obj: any) {
            return (update as any)(obj, ...args);
        }
    } else {
        const [obj, prop, updater] = args;
        return {
            ...obj,
            [prop]: updater(obj[prop])
        }
    }
}