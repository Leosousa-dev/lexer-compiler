
enum tokenKind{
    LET = 'let', // Keyword let
    EQ = 'eq', // Equality operator '=='
    LP = 'lp', // Left parenthesis '('
    RP = 'rp', // Right parenthesis ')'
    Left_BRACE = 'lcb', // Left curly brace '{'
    RIGHT_BRACE = 'rcb', // Right curly brace '}'
    SC = 'sc', // Semicolon ';'
    ADD = 'add', // Plus '+'
    INT = 'int', // Integer literal
    STR = 'str', // String literal
    ID = 'id',   // Identifier
    EOF = "EOF"
}

type Token = {
    kind: tokenKind,
    value: string
}

function createTk(typeTk: tokenKind, valueTk: string = ""): Token{
    const newTk = {kind: typeTk, value: valueTk}
    return newTk;
}


export default function parse(code: string) {
    let tokens:  Token[] = [];
    let index = 0;
    let char: string = "";
    const skipChar = new Set(["\n", "\t", " ", ""])



    while (code.length > index) {
        let currentToken = code[index];
        
        if(!skipChar.has(currentToken)){
            char+= currentToken;

        }else if(char !== ""){
            
            switch(char){
                case "let":
                    tokens.push(createTk(tokenKind.LET, char))
                    break;
                case "{":
                    console.log("achouuuu!!: ", char)
                    break;
                case "}":
                    console.log("achouuuu!!: ", char)
                    break;

            }
            char = ""
        }
        
        
        index++;
    }
    console.log(tokens)
    return tokens;
}
