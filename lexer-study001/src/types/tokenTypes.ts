
export enum tokenKind{
    LET = 'let', // Keyword let
    EQ = 'eq', // Equality operator '=='
    LEFT_PARENT = 'lp', // Left parenthesis '('
    RIGHT_PARENT = 'rp', // Right parenthesis ')'
    LEFT_BRACE = 'lcb', // Left curly brace '{'
    RIGHT_BRACE = 'rcb', // Right curly brace '}'
    SC = 'sc', // Semicolon ';'
    ADD = 'add', // Plus '+'
    INT = 'int', // Integer literal
    STR = 'str', // String literal
    ID = 'id',   // Identifier
    EOF = "EOF"
};

export type Token = {
    kind: tokenKind,
    value: string
};
