import { dissoc } from '../src/dissoc';
import { dissocIn } from '../src/dissocIn';

describe('dissoc & dissocIn tests', () => {
    it('should return object without key', () => {
        const someVar = {a: 1, b: 2}
        expect(dissoc(someVar, 'a')).toEqual({b: 2});
    })

    it('should mutate while dissocing', () => {
        const someVar = {a: 1, b: 2}
        const res = dissoc(someVar, 'a');

        expect(res).not.toBe(someVar);
        expect('a' in someVar).toBeTruthy()
    });

    it('should not fail with missing keys', () => {
        const someVar = {a: 'b'};
        expect(dissoc(someVar, 'test' as any)).toEqual({a: 'b'});
    });

    it('should dissoc nested', () => {
        const someVar = {a: {b: { c: 'var' }}};

        expect(dissocIn(someVar, ['a', 'b', 'c'])).toEqual({a: {b: {}}})
    });

    it('should not mutate any level when dissocin', () => {
        const b = { c: 'var' }
        const a = { b };
        const someVar = { a };


        const res = dissocIn(someVar, ['a', 'b', 'c']);

        expect(someVar).toEqual({a: {b: { c: 'var' }}});

        expect(someVar.a).toBe(a);
        expect(someVar.a.b).toBe(b);

        expect(res.a).not.toBe(a);
        expect(res.a.b).not.toBe(b);
    })
})