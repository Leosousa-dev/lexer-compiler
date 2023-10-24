import read from "./file/fileRead"

function lexer(){
    const code = read()
    let index: number = 0;
    let char = "";
    let testArry: string[] = [];
    const skipChar = new Set([" ", "\n", "\t"]);

    while(code.length > index){
        let currentChar = code[index];
        
        if(!skipChar.has(currentChar)){
            char += currentChar
            console.log(currentChar)
        }
        else if(char !== ""){
            testArry.push(char)
            char = ""
        }
        index++
    }
    console.log(testArry)
}

lexer()