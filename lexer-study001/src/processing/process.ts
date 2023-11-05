import { isIdentifier } from "../utils/isIdentifier";
import { tokenKind, Token } from "../types/tokenTypes";
import createTk from "../utils/createToken";
import outPut from "../cli/output/out";
import { exit } from "process";

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
            if(char === "let"){
                tokens.push(createTk(tokenKind.LET, char))
            }
            else{
                outPut(`Token 👉 ${char} is not recognized `, "remove is token")
                exit()
            }
            
            char = ""
        }
 

       
        
        index++;
    };

    console.log(tokens)
    return tokens;
};
