import { condp } from "./condp"

import { IllegalArgumentException } from "./utils/errors"
import { even } from "./utils/even"
import { identity } from "./utils/identity"
import { odd } from "./utils/odd"

// if more cond options need supporting. 
// const generator = (n: number) => [...new Array(n)].map((_, i1) => {
//     let conditionCount = i1 + 1;


//     let out = 'export function cond<TYPES, D extends ErrorCons>(ARGS, ...defaultPair: defaultPair<D>): RES D extends ErrorConstructor ? never : D';
// // ReturnType
//     while (conditionCount--) {
//         const j = conditionCount + 1;
//         out = out
//             .replace('TYPES', `TYPES, T0_${j} extends boolean, T1_${j} `)
//             .replace('ARGS', `ARGS, is_${j}: T0_${j}, res_${j}: T1_${j} `)
//             .replace('RES ', `RES T0_${j} extends true ? Unwrap<T1_${j}> : `)
//     }
//     return out.replace('TYPES, ', '').replace('ARGS, ', '').replace('RES', '');
// }).join(';\n')
// console.clear();
// console.log(generator(10));
type Unwrap<T> =
	T extends Promise<infer U> ? Promise<U> :
	T extends (...args: any) => Promise<infer U> ? Promise<U> :
	T extends (...args: any) => infer U ? U :
	T
type defaultPair<D> = [':else', D]|[];

export function cond<T0_1 extends boolean, T1_1 , D>(is_1: T0_1, res_1: T1_1 , ...defaultPair: defaultPair<D>):  T0_1 extends true ? Unwrap<T1_1> : D extends ErrorConstructor ? never : D;
export function cond<T0_1 extends boolean, T1_1 , T0_2 extends boolean, T1_2 , D>(is_1: T0_1, res_1: T1_1 , is_2: T0_2, res_2: T1_2 , ...defaultPair: defaultPair<D>):  T0_1 extends true ? Unwrap<T1_1> : T0_2 extends true ? Unwrap<T1_2> : D extends ErrorConstructor ? never : D;
export function cond<T0_1 extends boolean, T1_1 , T0_2 extends boolean, T1_2 , T0_3 extends boolean, T1_3 , D>(is_1: T0_1, res_1: T1_1 , is_2: T0_2, res_2: T1_2 , is_3: T0_3, res_3: T1_3 , ...defaultPair: defaultPair<D>):  T0_1 extends true ? Unwrap<T1_1> : T0_2 extends true ? Unwrap<T1_2> : T0_3 extends true ? Unwrap<T1_3> : D extends ErrorConstructor ? never : D;
export function cond<T0_1 extends boolean, T1_1 , T0_2 extends boolean, T1_2 , T0_3 extends boolean, T1_3 , T0_4 extends boolean, T1_4 , D>(is_1: T0_1, res_1: T1_1 , is_2: T0_2, res_2: T1_2 , is_3: T0_3, res_3: T1_3 , is_4: T0_4, res_4: T1_4 , ...defaultPair: defaultPair<D>):  T0_1 extends true ? Unwrap<T1_1> : T0_2 extends true ? Unwrap<T1_2> : T0_3 extends true ? Unwrap<T1_3> : T0_4 extends true ? Unwrap<T1_4> : D extends ErrorConstructor ? never : D;
export function cond<T0_1 extends boolean, T1_1 , T0_2 extends boolean, T1_2 , T0_3 extends boolean, T1_3 , T0_4 extends boolean, T1_4 , T0_5 extends boolean, T1_5 , D>(is_1: T0_1, res_1: T1_1 , is_2: T0_2, res_2: T1_2 , is_3: T0_3, res_3: T1_3 , is_4: T0_4, res_4: T1_4 , is_5: T0_5, res_5: T1_5 , ...defaultPair: defaultPair<D>):  T0_1 extends true ? Unwrap<T1_1> : T0_2 extends true ? Unwrap<T1_2> : T0_3 extends true ? Unwrap<T1_3> : T0_4 extends true ? Unwrap<T1_4> : T0_5 extends true ? Unwrap<T1_5> : D extends ErrorConstructor ? never : D;
export function cond<T0_1 extends boolean, T1_1 , T0_2 extends boolean, T1_2 , T0_3 extends boolean, T1_3 , T0_4 extends boolean, T1_4 , T0_5 extends boolean, T1_5 , T0_6 extends boolean, T1_6 , D>(is_1: T0_1, res_1: T1_1 , is_2: T0_2, res_2: T1_2 , is_3: T0_3, res_3: T1_3 , is_4: T0_4, res_4: T1_4 , is_5: T0_5, res_5: T1_5 , is_6: T0_6, res_6: T1_6 , ...defaultPair: defaultPair<D>):  T0_1 extends true ? Unwrap<T1_1> : T0_2 extends true ? Unwrap<T1_2> : T0_3 extends true ? Unwrap<T1_3> : T0_4 extends true ? Unwrap<T1_4> : T0_5 extends true ? Unwrap<T1_5> : T0_6 extends true ? Unwrap<T1_6> : D extends ErrorConstructor ? never : D;
export function cond<T0_1 extends boolean, T1_1 , T0_2 extends boolean, T1_2 , T0_3 extends boolean, T1_3 , T0_4 extends boolean, T1_4 , T0_5 extends boolean, T1_5 , T0_6 extends boolean, T1_6 , T0_7 extends boolean, T1_7 , D>(is_1: T0_1, res_1: T1_1 , is_2: T0_2, res_2: T1_2 , is_3: T0_3, res_3: T1_3 , is_4: T0_4, res_4: T1_4 , is_5: T0_5, res_5: T1_5 , is_6: T0_6, res_6: T1_6 , is_7: T0_7, res_7: T1_7 , ...defaultPair: defaultPair<D>):  T0_1 extends true ? Unwrap<T1_1> : T0_2 extends true ? Unwrap<T1_2> : T0_3 extends true ? Unwrap<T1_3> : T0_4 extends true ? Unwrap<T1_4> : T0_5 extends true ? Unwrap<T1_5> : T0_6 extends true ? Unwrap<T1_6> : T0_7 extends true ? Unwrap<T1_7> : D extends ErrorConstructor ? never : D;
export function cond<T0_1 extends boolean, T1_1 , T0_2 extends boolean, T1_2 , T0_3 extends boolean, T1_3 , T0_4 extends boolean, T1_4 , T0_5 extends boolean, T1_5 , T0_6 extends boolean, T1_6 , T0_7 extends boolean, T1_7 , T0_8 extends boolean, T1_8 , D>(is_1: T0_1, res_1: T1_1 , is_2: T0_2, res_2: T1_2 , is_3: T0_3, res_3: T1_3 , is_4: T0_4, res_4: T1_4 , is_5: T0_5, res_5: T1_5 , is_6: T0_6, res_6: T1_6 , is_7: T0_7, res_7: T1_7 , is_8: T0_8, res_8: T1_8 , ...defaultPair: defaultPair<D>):  T0_1 extends true ? Unwrap<T1_1> : T0_2 extends true ? Unwrap<T1_2> : T0_3 extends true ? Unwrap<T1_3> : T0_4 extends true ? Unwrap<T1_4> : T0_5 extends true ? Unwrap<T1_5> : T0_6 extends true ? Unwrap<T1_6> : T0_7 extends true ? Unwrap<T1_7> : T0_8 extends true ? Unwrap<T1_8> : D extends ErrorConstructor ? never : D;
export function cond<T0_1 extends boolean, T1_1 , T0_2 extends boolean, T1_2 , T0_3 extends boolean, T1_3 , T0_4 extends boolean, T1_4 , T0_5 extends boolean, T1_5 , T0_6 extends boolean, T1_6 , T0_7 extends boolean, T1_7 , T0_8 extends boolean, T1_8 , T0_9 extends boolean, T1_9 , D>(is_1: T0_1, res_1: T1_1 , is_2: T0_2, res_2: T1_2 , is_3: T0_3, res_3: T1_3 , is_4: T0_4, res_4: T1_4 , is_5: T0_5, res_5: T1_5 , is_6: T0_6, res_6: T1_6 , is_7: T0_7, res_7: T1_7 , is_8: T0_8, res_8: T1_8 , is_9: T0_9, res_9: T1_9 , ...defaultPair: defaultPair<D>):  T0_1 extends true ? Unwrap<T1_1> : T0_2 extends true ? Unwrap<T1_2> : T0_3 extends true ? Unwrap<T1_3> : T0_4 extends true ? Unwrap<T1_4> : T0_5 extends true ? Unwrap<T1_5> : T0_6 extends true ? Unwrap<T1_6> : T0_7 extends true ? Unwrap<T1_7> : T0_8 extends true ? Unwrap<T1_8> : T0_9 extends true ? Unwrap<T1_9> : D extends ErrorConstructor ? never : D;
export function cond<T0_1 extends boolean, T1_1 , T0_2 extends boolean, T1_2 , T0_3 extends boolean, T1_3 , T0_4 extends boolean, T1_4 , T0_5 extends boolean, T1_5 , T0_6 extends boolean, T1_6 , T0_7 extends boolean, T1_7 , T0_8 extends boolean, T1_8 , T0_9 extends boolean, T1_9 , T0_10 extends boolean, T1_10 , D>(is_1: T0_1, res_1: T1_1 , is_2: T0_2, res_2: T1_2 , is_3: T0_3, res_3: T1_3 , is_4: T0_4, res_4: T1_4 , is_5: T0_5, res_5: T1_5 , is_6: T0_6, res_6: T1_6 , is_7: T0_7, res_7: T1_7 , is_8: T0_8, res_8: T1_8 , is_9: T0_9, res_9: T1_9 , is_10: T0_10, res_10: T1_10 , ...defaultPair: defaultPair<D>):  T0_1 extends true ? Unwrap<T1_1> : T0_2 extends true ? Unwrap<T1_2> : T0_3 extends true ? Unwrap<T1_3> : T0_4 extends true ? Unwrap<T1_4> : T0_5 extends true ? Unwrap<T1_5> : T0_6 extends true ? Unwrap<T1_6> : T0_7 extends true ? Unwrap<T1_7> : T0_8 extends true ? Unwrap<T1_8> : T0_9 extends true ? Unwrap<T1_9> : T0_10 extends true ? Unwrap<T1_10> : D;
export function cond(...args: any) {
    // changes here nead to be mirrored in cond
    try {
        return condp(identity, null, ...args);
    } catch (e) {
        if (e instanceof IllegalArgumentException) return null;
        throw e;
    }
}