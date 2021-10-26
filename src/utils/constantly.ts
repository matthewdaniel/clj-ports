export function constantly(v: any) {
    return function constantly(...args: any[]) {
        return v;
    }
}