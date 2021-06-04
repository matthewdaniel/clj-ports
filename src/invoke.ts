export const ᱹ = <T>(fn: T, ...args: any[]): T extends (...args: any) => infer U ? U : never => (fn as any)(...args);
