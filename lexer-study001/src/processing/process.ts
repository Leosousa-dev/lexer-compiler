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

        if(!skipChar.has(currentToken)){
            char += currentToken
        }
        else if(char !== ""){
            switch(char){
                case "let":
                    console.log("ok")
                    break;
                default: 
                    console.log("Token not recognized: ", char)
                    break;
                
            };
        
            
            char = ""
        }
 

       
        
        index++;
    };

    console.log(tokens)
    return tokens;
};
