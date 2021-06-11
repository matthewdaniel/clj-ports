import { condp } from "./condp";
import { i } from "./invoke";
import { IllegalArgumentException } from "./utils/errors";
import { even } from "./utils/even";
import { odd } from "./utils/odd";

// const generate = (n: number) => {
//     const out = [];
//     n++
//     while (n--) {
//         let fn = `export function _case<V, D, TYPE>(v:V, VARS, defVal: D): RET D;`;
//         let i;
//         for (i = 1; i <= n; i++) fn = fn
//             .replace('TYPE', `M${i}, R${i}, TYPE`)
//             .replace('VARS,', `m${i}: M${i}, r${i}: R${i}, VARS,`)
//             .replace('RET', `V extends M${i} ? R${i} : RET`);
//         out.unshift(fn.replace(', TYPE', '').replace(' VARS,', '').replace(' RET ', ''));
//     }
//     return out.join('\n');
// }
// console.log(generate(10));
export function case$<V, D, M1, R1>(v:V, m1: M1, r1: R1, defVal?: D): V extends M1 ? R1 :D;
export function case$<V, D, M1, R1, M2, R2>(v:V, m1: M1, r1: R1, m2: M2, r2: R2, defVal?: D): V extends M1 ? R1 : V extends M2 ? R2 :D;
export function case$<V, D, M1, R1, M2, R2, M3, R3>(v:V, m1: M1, r1: R1, m2: M2, r2: R2, m3: M3, r3: R3, defVal?: D): V extends M1 ? R1 : V extends M2 ? R2 : V extends M3 ? R3 :D;
export function case$<V, D, M1, R1, M2, R2, M3, R3, M4, R4>(v:V, m1: M1, r1: R1, m2: M2, r2: R2, m3: M3, r3: R3, m4: M4, r4: R4, defVal?: D): V extends M1 ? R1 : V extends M2 ? R2 : V extends M3 ? R3 : V extends M4 ? R4 :D;
export function case$<V, D, M1, R1, M2, R2, M3, R3, M4, R4, M5, R5>(v:V, m1: M1, r1: R1, m2: M2, r2: R2, m3: M3, r3: R3, m4: M4, r4: R4, m5: M5, r5: R5, defVal?: D): V extends M1 ? R1 : V extends M2 ? R2 : V extends M3 ? R3 : V extends M4 ? R4 : V extends M5 ? R5 :D;
export function case$<V, D, M1, R1, M2, R2, M3, R3, M4, R4, M5, R5, M6, R6>(v:V, m1: M1, r1: R1, m2: M2, r2: R2, m3: M3, r3: R3, m4: M4, r4: R4, m5: M5, r5: R5, m6: M6, r6: R6, defVal?: D): V extends M1 ? R1 : V extends M2 ? R2 : V extends M3 ? R3 : V extends M4 ? R4 : V extends M5 ? R5 : V extends M6 ? R6 :D;
export function case$<V, D, M1, R1, M2, R2, M3, R3, M4, R4, M5, R5, M6, R6, M7, R7>(v:V, m1: M1, r1: R1, m2: M2, r2: R2, m3: M3, r3: R3, m4: M4, r4: R4, m5: M5, r5: R5, m6: M6, r6: R6, m7: M7, r7: R7, defVal?: D): V extends M1 ? R1 : V extends M2 ? R2 : V extends M3 ? R3 : V extends M4 ? R4 : V extends M5 ? R5 : V extends M6 ? R6 : V extends M7 ? R7 :D;
export function case$<V, D, M1, R1, M2, R2, M3, R3, M4, R4, M5, R5, M6, R6, M7, R7, M8, R8>(v:V, m1: M1, r1: R1, m2: M2, r2: R2, m3: M3, r3: R3, m4: M4, r4: R4, m5: M5, r5: R5, m6: M6, r6: R6, m7: M7, r7: R7, m8: M8, r8: R8, defVal?: D): V extends M1 ? R1 : V extends M2 ? R2 : V extends M3 ? R3 : V extends M4 ? R4 : V extends M5 ? R5 : V extends M6 ? R6 : V extends M7 ? R7 : V extends M8 ? R8 :D;
export function case$<V, D, M1, R1, M2, R2, M3, R3, M4, R4, M5, R5, M6, R6, M7, R7, M8, R8, M9, R9>(v:V, m1: M1, r1: R1, m2: M2, r2: R2, m3: M3, r3: R3, m4: M4, r4: R4, m5: M5, r5: R5, m6: M6, r6: R6, m7: M7, r7: R7, m8: M8, r8: R8, m9: M9, r9: R9, defVal?: D): V extends M1 ? R1 : V extends M2 ? R2 : V extends M3 ? R3 : V extends M4 ? R4 : V extends M5 ? R5 : V extends M6 ? R6 : V extends M7 ? R7 : V extends M8 ? R8 : V extends M9 ? R9 :D;
export function case$<V, D, M1, R1, M2, R2, M3, R3, M4, R4, M5, R5, M6, R6, M7, R7, M8, R8, M9, R9, M10, R10>(v:V, m1: M1, r1: R1, m2: M2, r2: R2, m3: M3, r3: R3, m4: M4, r4: R4, m5: M5, r5: R5, m6: M6, r6: R6, m7: M7, r7: R7, m8: M8, r8: R8, m9: M9, r9: R9, m10: M10, r10: R10, defVal?: D): V extends M1 ? R1 : V extends M2 ? R2 : V extends M3 ? R3 : V extends M4 ? R4 : V extends M5 ? R5 : V extends M6 ? R6 : V extends M7 ? R7 : V extends M8 ? R8 : V extends M9 ? R9 : V extends M10 ? R10 :D;
export function case$(v: any, ...args: any[]): any {
    return i('condp', (a: any) => a === v, v, ...args)
    // const retIdx = args.findIndex((test, idx) => even(idx) && test === v) + 1;
    // if (retIdx) return args[retIdx];
    // if (odd(args.length)) return args[args.length - 1]

    // throw new IllegalArgumentException
}
