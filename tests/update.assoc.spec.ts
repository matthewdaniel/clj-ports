import { updateIn } from "../src/updateIn"
import { update } from "../src/update"

describe('tests for update and updateIn', () => {
    test.each([
        ['a', 99],
        [['a'], 99]
    ])('update should swap first level props without mutation with prop or path $1', (pathOrProp, newVal) => {
        const obj = { a: 1, b: 2}
        const fn = Array.isArray(pathOrProp) ? updateIn : update;

        expect(fn(obj, pathOrProp as any, (x => newVal))).toEqual({a: newVal, b: 2});
        expect(fn(obj, pathOrProp as any, (x => newVal))).not.toBe(obj);
        expect(obj).toEqual({ a: 1, b: 2})
    });

    it('should update deep and not mutate', () => {
        const b = { c: 1 }
        const a = { b }
        const obj = { a };

        const res = updateIn(obj, ['a', 'b', 'c'], x => 99);
        expect(b).toEqual({c: 1});
        expect(a).toEqual({ b });
        expect(obj).toEqual({ a });
        expect(res).not.toBe(obj);
        expect(res).toEqual({ a: { b: { c: 99 }}})
        expect(res.a).not.toBe(obj.a);
        expect(res.a.b).not.toBe(obj.a.b);
    })
  
    it('should set a missing property', () => {
        const obj = {a: {b: {} as {c?: string}}}
        expect(updateIn(obj, ['a', 'b', 'c'], (x) => 'yes')).toEqual({a: {b: {c: 'yes'}}})
    })

    it('should be identical if no change happened', () => {
        const o = { a: { b: { c: 99 }}};
        
        expect(updateIn(o, ['a', 'b', 'c'], x => x)).toBe(o);
    })
})