import { fns } from './index';
type iIndex = typeof fns;

export const i = <T extends keyof iIndex>(fn: T, ...args: any[]): iIndex[T] extends (...args: any) => infer U ? U : never => {
    console.log('\n'.repeat(3), fn, '\n', fns, '\n', fn in fns, '\n'.repeat(3));
    return (fns[fn] as any)(...args)
};
