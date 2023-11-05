import { isIdentifier } from "../utils/isIdentifier";
import { tokenKind, Token } from "../types/tokenTypes";
import createTk from "../utils/createToken";


export default function parse(code: string) {
    let tokens:  Array<Token> = [];
    let index = 0;
    let char: string = "";
    const skipChar = new Set(["\n", "\t", " ", ""])


    while (code.length > index) {
        let currentToken = code[index];


       
        
        index++;
    };

    console.log(tokens)
    return tokens;
};
