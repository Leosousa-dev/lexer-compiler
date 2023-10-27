
type Tokens = string

export default function paser(code: string): Tokens[]{
    let tokens: Tokens[] = [];
    let char: string = "";
    let index: number = 0;
    const skipChar = new Set([" ", "\n", "\t", "\r",]);


    while(code.length > index){
        let currentToken = code[index];
        
        if(!skipChar.has(currentToken)){
            char += currentToken;

        }else if(char !== ""){
            tokens.push(char)
            char = ""

        }

        index++
    }
    if (char !== "") {
        tokens.push(char);
    }
    console.log(tokens)


    return tokens
}