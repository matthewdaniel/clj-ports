import { updateIn } from '../src/updateIn';
describe('test updateIn', () => {
    it('should update 1 level', () => {
        const item = {a: 1, b: 2}
        expect(updateIn(item, ['a'], (x) => 3)).toEqual({a: 3, b: 2})
    })

    it('should deep update without mutation', () => {
        const b = { c: 1 };
        const a = { b };
        const item = { a };
        const res = updateIn(item, ['a', 'b', 'c'], () => 99);

        expect(res).toEqual({a: {b: {c: 99}}});

        expect(res.a).not.toBe(a);
        expect(res.a.b).not.toBe(b);

        expect(res).not.toBe(item);
    })
})