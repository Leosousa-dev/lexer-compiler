import { tokenKind, Token } from "../types/tokenTypes";

export default function createTk(typeTk: tokenKind, valueTk: string = ""): Token{
    const newTk = {kind: typeTk, value: valueTk}
    return newTk;
};
