import path from "node:path";
import fs from "node:fs";
import getPathFile from "../cli/input/input";


export default function read(){
    const fileName = getPathFile()  // <- get param[pathFile]
    const currentDir = process.cwd() // <- get current path
    const fullPath = path.join(currentDir, fileName);
    const source = fs.readFileSync(fullPath, 'utf-8')

    return source;
}
