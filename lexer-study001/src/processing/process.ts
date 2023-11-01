
type Token = {
    type: string,
    value: string
}

function createTk(typeTk: string, valueTk: string): Token{
    return {type: typeTk, value: valueTk}
}

export default function parse(code) {
    let tokens:  Token[] = [];
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
