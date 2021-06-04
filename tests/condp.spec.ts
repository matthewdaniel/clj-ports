import { condp } from "../src/condp"
// (condp #(zero? (mod %2 %1)) n
//     15 "fizzbuzz"
//     3  "fizz"
//     5  "buzz"
//     n))

describe('condp', () => {
    it('test', () => {
        // expect(condp((n, v) => console.log({n, v}) as any || (v % n) === 0, 2, 15, "fizzbuzz", 3, "fizz", 5, "buzz", 2)).toBe('red');
    })
})