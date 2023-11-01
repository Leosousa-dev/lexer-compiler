import { isIdentifier } from "../utils/isIdentifier";
import { tokenKind, Token } from "../types/tokenTypes";
import createTk from "../utils/createToken";


const keyworldMap: Record<string, tokenKind> = {
    "let": tokenKind.LET,
    "{": tokenKind.LEFT_BRACE,
    "}": tokenKind.RIGHT_BRACE,

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
        if(char in keyworldMap){
            tokens.push(createTk(keyworldMap[char], char))
        }
        if(isIdentifier(char)){
            tokens.push(createTk(tokenKind.ID, char));
        }
            char = ""
        }
        
        
        index++;
    };
    console.log(tokens)
    return tokens;
};
