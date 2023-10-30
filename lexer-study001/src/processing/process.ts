
type Tokens = {
    type: string,
    value: string
}

export default function parse(code) {
    let tokens:  Tokens[] = [];
    let index = 0;

    const source = code.split(" ");
    source.push("eof");

    while (source.length > index) {
        let currentToken = source[index];

        if (currentToken === "let") {
            tokens.push({ type: "KEYWORD", value: "let" });
        }

        index++;
    }
    console.log(tokens);
    return tokens;
}
