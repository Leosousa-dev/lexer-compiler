const reservedkeys = new Set(['let']);


export function isIdentifier(char: string): boolean{
    return /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(char) && !isReservedWord(char);
};


export function isReservedWord(char: string): boolean{
    return reservedkeys.has(char)
};
