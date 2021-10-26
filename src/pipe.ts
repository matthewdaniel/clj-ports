const fn = () => 1
const fn2 = () => 2;
const fn3 = () => 3;

type FFirst<T> = (a: T) => any;
type F<T extends (...args: any[]) => any> = (a: ReturnType<T>) => any;

// export function pipe<T>(arg: T): T
// export function pipe<T, F1 extends F<T>>(arg: T, fn1?: F1): ReturnType<F1>
// export function pipe<T, F1 extends F<T>, F2 extends F<F1>>(arg: T, fn1?: F1, fn2?: F2): ReturnType<F2>
export function pipe<T, 
    F1 extends FFirst<T>,
    F2 extends F<F1>,
    F3 extends F<F2>,
    F4 extends F<F3>,
    F5 extends F<F4>,
    F6 extends F<F5>,
    F7 extends F<F6>,
    F8 extends F<F7>,
    F9 extends F<F8>,
    F10 extends F<F9>,
    F11 extends F<F10>,
    F12 extends F<F11>,
    F13 extends F<F12>,
    F14 extends F<F13>,
    F15 extends F<F14>,
>(arg: T, fn1?: F1, fn2?: F2, fn3?: F3, fn4?: F4, fn5?: F5, fn6?: F6, fn7?: F7, fn8?: F8, fn9?: F9, f10?: F10, f11?: F11, f12?: F12, f13?: F13, f14?: F15): 
    F15 extends F<F14> ? ReturnType<F15>
    : F14 extends F<F13> ? ReturnType<F14>
    : F13 extends F<F12> ? ReturnType<F13>
    : F12 extends F<F11> ? ReturnType<F12>
    : F11 extends F<F10> ? ReturnType<F11>
    : F10 extends F<F9> ? ReturnType<F10>
    : F9 extends F<F8> ? ReturnType<F9>
    : F8 extends F<F7> ? ReturnType<F8>
    : F7 extends F<F6> ? ReturnType<F7>
    : F6 extends F<F5> ? ReturnType<F6>
    : F5 extends F<F4> ? ReturnType<F5>
    : F4 extends F<F3> ? ReturnType<F4>
    : F3 extends F<F2> ? ReturnType<F3>
    : F2 extends F<F1> ? ReturnType<F2>
    : F1 extends FFirst<T> ? ReturnType<F1>
    : T;

export function pipe(arg: any, ...fns: any[]) {
    return fns.reduce((v, fn) => fn(v), arg) 
}




