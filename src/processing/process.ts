
type Tokens = {
    kind: string,
    value: string
}

export default function paser(code: string): Tokens[]{
    let tokens: Tokens[] = [];
    let char: string = "";
    let index: number = 0;

    while(code.length > index){
        let currentToken = code[index];

        console.log(currentToken)

        index++
    }



    return tokens
}