type ret<T> = T extends (...args: any) => infer U ? U : T;

/** returns value (or value of called user function) if test is true else undefined */
export function when<T>(test: boolean, value: T): ret<T>|undefined {
    return test 
        ? typeof value === 'function' ? value() : value
        : undefined;
}