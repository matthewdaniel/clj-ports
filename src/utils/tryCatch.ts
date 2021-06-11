import { i } from "../invoke";

class catcher {}
class final {}
/**
 * Not for extension, just for tricking typescript
 */
 class BaseError extends Error {
    constructor() {
        super();
    }
}

export const try$ = (fn: Function, ...statements: (catcher|final)[] ) => {
    try {
        fn();
    } catch (e) {
        for (const s of statements) i('when', )
    }
}

type iHandler<E extends (typeof BaseError | typeof Error)> = (e: InstanceType<E>) => any;

export const catch$ = <E extends (typeof BaseError | typeof Error)>(e: E, h: iHandler<E>): catcher => ({}) as any
export const finally$ = (h: () => any): final => ({}) as any

try$(
    () => {},
    catch$(Error, (e => e.))
    )