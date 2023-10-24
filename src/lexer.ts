import read from "./file/fileRead"

function lexer(){
    const code = read()
    let index: number = 0;
    let char = "";
    const skipChar = new Set([" ", "\n", "\t"]);

    while(code.length > index){
        let currentChar = code[index];
        
        if(!skipChar.has(currentChar)){
            console.log(currentChar)
        }
        else{
            console.log("empty space")
        }
        index++
    }

}

lexer()