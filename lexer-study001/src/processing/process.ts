
type Tokens = {
    type: string,
    value: string
}

export default function parse(code) {
    let tokens:  Tokens[] = [];
    let index = 0;
    let char: string = "";
    const skipChar = new Set(["\n", "\t", " ", ""])


    tokens.push({type: "EOF", value: "EOF"});

    while (code.length > index) {
        let currentToken = code[index];
        
        if(!skipChar.has(currentToken)){
            char+= currentToken;

        }else if(char !== ""){
            
            switch(char){
                case "let":
                    console.log("achouuuu!!: ", char);
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
    // console.log(tokens)
    return tokens;
}
