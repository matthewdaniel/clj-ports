import { instance } from "../instance";
import { partial } from "../partial";
import { pipe } from "../pipe";

class catcher<T> { constructor(public e: typeof Error | typeof BaseError, public h: Function ) {} }
class final { constructor(public h: Function ) {}}
/**
 * Not for extension, just for tricking typescript
 */
 class BaseError extends Error {
    constructor() {
        super();
    }
}

const isCatcher = (test: any): test is catcher<any> => !!test.e;
const isFinaly = (test: any): test is final => !test.e;

export const try$ = (fn: Function, ...statements: (catcher<any>|final)[] ) => {
    try {
        fn();
    } catch (e) {
        const s = statements
            .filter(isCatcher)
            .find(s => e instanceof s.e)
        if (!s) throw e;

        return s.h(e);
    } finally {
        statements.find(isFinaly)?.h();
    }
}

type iHandler<E extends (typeof BaseError | typeof Error)> = (e: InstanceType<E>) => any;

export const catch$ = <E extends (typeof BaseError | typeof Error)>(e: E, h: iHandler<E>): catcher<any> => new catcher(e, h);
export const finally$ = (h: () => any): final => ({}) as any

try$(
    () => {},
    catch$(Error, (e => e))
    )