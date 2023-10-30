
type Tokens = {
    type: string,
    value: string
}

export default function parse(code) {
    let tokens:  Tokens[] = [];
    let index = 0;

    const source = code.split(" ");
    tokens.push({type: "EOF", value: "EOF"});

    while (source.length > index) {
        let currentToken = source[index];
        console.log(currentToken)
        if (currentToken === "let") {
            tokens.push({ type: "KEYWORD", value: "let" });
        }
        // else if (currentToken.match(/^[a-zA-Z_][a-zA-Z0-9_]*$/)) {
        //     tokens.push({ type: "IDENTIFIER", value: currentToken });
        // }
        index++;
    }
    console.log(tokens);
    return tokens;
}
