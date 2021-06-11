type Unwrap<T> =
	T extends Promise<infer U> ? Promise<U> :
	T extends (...args: any) => Promise<infer U> ? Promise<U> :
	T extends (...args: any) => infer U ? U :
	T;
type minus<N extends number> = 
    N extends 15 ? 14 
    : N extends 14 ? 13
    : N extends 13 ? 12
    : N extends 12 ? 11
    : N extends 11 ? 10
    : N extends 10 ? 9
    : N extends 9 ? 8
    : N extends 8 ? 7
    : N extends 7 ? 6
    : N extends 6 ? 5
    : N extends 5 ? 4
    : N extends 4 ? 3
    : N extends 3 ? 2
    : N extends 2 ? 1
    : N extends 1 ? 0 : never;

// type first<T extends any[]> = T extends [ infer HEAD, any ] ? HEAD : any[];
type shift1<T extends any[]> = T extends [ any, ...infer Tail ] ? Tail : any[];
type shift2<T extends any[]> = T extends [ any, any, ...infer Tail ] ? Tail : any[];
type shift3<T extends any[]> = T extends [ any, any, any, ...infer Tail ] ? Tail : any[];
type shift4<T extends any[]> = T extends [ any, any, any, any, ...infer Tail ] ? Tail : any[];
type shift5<T extends any[]> = T extends [ any, any, any, any, any, ...infer Tail ] ? Tail : any[];
type shift6<T extends any[]> = T extends [ any, any, any, any, any, any, ...infer Tail ] ? Tail : any[];
type shift7<T extends any[]> = T extends [ any, any, any, any, any, any, any, ...infer Tail ] ? Tail : any[];
type shift8<T extends any[]> = T extends [ any, any, any, any, any, any, any, any, ...infer Tail ] ? Tail : any[];
type shift9<T extends any[]> = T extends [ any, any, any, any, any, any, any, any, any, ...infer Tail ] ? Tail : any[];
type shift10<T extends any[]> = T extends [ any, any, any, any, any, any, any, any, any, any, ...infer Tail ] ? Tail : any[];
type shift11<T extends any[]> = T extends [ any, any, any, any, any, any, any, any, any, any, any, ...infer Tail ] ? Tail : any[];
type shift12<T extends any[]> = T extends [ any, any, any, any, any, any, any, any, any, any, any, any, ...infer Tail ] ? Tail : any[];
type shift<T extends any[], n extends number> =
    n extends 1 ? shift1<T>
    : n extends 2 ? shift2<T>
    : n extends 3 ? shift3<T>
    : n extends 4 ? shift4<T>
    : n extends 5 ? shift5<T>
    : n extends 6 ? shift6<T>
    : n extends 7 ? shift7<T>
    : n extends 8 ? shift8<T>
    : n extends 9 ? shift9<T>
    : n extends 10 ? shift10<T>
    : n extends 11 ? shift11<T>
    : n extends 12 ? shift12<T> : never;

type take1<T extends any[]> = [T[0]];
type take2<T extends any[]> = [T[0], T[1], ];
type take3<T extends any[]> = [T[0], T[1], T[2] ];
type take4<T extends any[]> = [T[0], T[1], T[2], T[3] ];
type take5<T extends any[]> = [T[0], T[1], T[2], T[3], T[4] ];
type take6<T extends any[]> = [T[0], T[1], T[2], T[3], T[4], T[5] ];
type take7<T extends any[]> = [T[0], T[1], T[2], T[3], T[4], T[5], T[6] ];
type take8<T extends any[]> = [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7] ];
type take9<T extends any[]> = [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7], T[8] ];
type take10<T extends any[]> = [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7], T[8], T[9] ];
type take11<T extends any[]> = [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7], T[8], T[9], T[10] ];
type take12<T extends any[]> = [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7], T[8], T[9], T[10], T[11] ];
type take<T extends any[], n extends number> =
    n extends 1 ? take1<T>
    : n extends 2 ? take2<T>
    : n extends 3 ? take3<T>
    : n extends 4 ? take4<T>
    : n extends 5 ? take5<T>
    : n extends 6 ? take6<T>
    : n extends 7 ? take7<T>
    : n extends 8 ? take8<T>
    : n extends 9 ? take9<T>
    : n extends 10 ? take10<T>
    : n extends 11 ? take11<T>
    : n extends 12 ? take12<T> : never;


export function partial<F extends (...args: any[]) => any>(fn: F, ...args: take<Parameters<F>, 0>): (...args: shift<Parameters<F>, 0>) => ReturnType<F>;
export function partial<F extends (...args: any[]) => any>(fn: F, ...args: take<Parameters<F>, 1>): (...args: shift<Parameters<F>, 1>) => ReturnType<F>;
export function partial<F extends (...args: any[]) => any>(fn: F, ...args: take<Parameters<F>, 2>): (...args: shift<Parameters<F>, 3>) => ReturnType<F>;
export function partial(fn: any, ...args: any[]) {
    return (...restArgs: any) => {
        fn(...args.concat(restArgs))
    }
}
