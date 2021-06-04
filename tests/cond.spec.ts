import { cond } from '../src/cond';

describe('cond', () => {
    it('concrete return 1st pair', () => {
        expect(cond(true, 1, false, 2)).toBe(1);
    })
    it('concrete return second pair', () => {
        expect(cond(false, 1, true, 'res')).toBe('res');
    })
    it('promise should type properly', () => {
        cond(true, Promise.resolve('yes')).then
        cond(true, { a: 'a' }).a
    })

    // it('should', async () => {
    //     expect(cond(true, async () => 'yes', "default")).resolves.toBe('yes');
    // })
})