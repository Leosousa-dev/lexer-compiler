
type Tokens = string

export default function paser(code: string): Tokens[]{
    let tokens: Tokens[] = [];
    let index: number = 0;

    const source = code.split(" ")
    source.push("eof")
    while(source.length > index){
                

        index++
    }

    return tokens
}