export function dissoc<T extends Object, K extends keyof T>(obj: T, k: K): Exclude<T, K>;
export function dissoc<T extends Object, K extends keyof T>(k: K): (obj: T) => Exclude<T, K>;
export function dissoc(objOrK: any, k?: any) {
    if (typeof objOrK === 'string') {
        return function curriedDissoc(obj: any) {
            return dissoc(obj, objOrK);
        } as any;
    } else {
        const {[k]: _, ...without} = objOrK;
        return without as any;
    }
}