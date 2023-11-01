import { isIdentifier } from "../utils/isIdentifier";
import { tokenKind, Token } from "../types/tokenTypes";
import createTk from "../utils/createToken";




export default function parse(code: string) {
    let tokens:  Token[] = [];
    let index = 0;
    let char: string = "";
    const skipChar = new Set(["\n", "\t", " ", ""])



    while (code.length > index) {
        let currentToken = code[index];
        let insideString: boolean = false;

        if(!skipChar.has(currentToken)){
            char+= currentToken;

        }else if(char !== ""){
            
            switch(char){
                case "let":
                    tokens.push(createTk(tokenKind.LET, char))
                    break;
                case "{":
                    tokens.push(createTk(tokenKind.LEFT_BRACE, char))
                    break;
                case "}":
                    tokens.push(createTk(tokenKind.RIGHT_BRACE, char))
                    break;

                default:
                    console.error("caracter nao reconhecido: ", char)
            };
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
