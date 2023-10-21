import read from "./file/fileRead"


function lexer(){
    const code = read()

    console.log(code);
}

lexer()