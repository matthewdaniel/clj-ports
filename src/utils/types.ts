type minus<N extends number> = 
    N extends 15 ? 14 
    : N extends 14 ? 13
    : N extends 13 ? 12
    : N extends 12 ? 11
    : N extends 11 ? 10
    : N extends 10 ? 9
    : N extends 9 ? 8
    : N extends 8 ? 7
    : N extends 7 ? 6
    : N extends 6 ? 5
    : N extends 5 ? 4
    : N extends 4 ? 3
    : N extends 3 ? 2
    : N extends 2 ? 1
    : N extends 1 ? 0 : never;

type scalar = string|number|boolean|null|undefined;