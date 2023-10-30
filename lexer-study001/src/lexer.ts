import read from "./file/fileRead"
import paser from "./processing/process";

function lexer(){
    const code = read()

    paser(code)

}

lexer()