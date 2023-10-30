import path from "node:path";
import fs from "node:fs";
import getPathFile from "../cli/input/input";
import chalk from "chalk";

export default function read(): string{
    const fileName = getPathFile()  // <- get param[pathFile]
    const currentDir = process.cwd() // <- get current path
    const fullPath = path.join(currentDir, fileName);
    try{
        const source: string = fs.readFileSync(fullPath, 'utf-8')

        return source;
    } catch(err){
        if(err.code === "ENOENT"){
            console.error(`O arquivo não existe: ${chalk.yellowBright.underline(fileName)}`);
        }else{
         console.error(`Error desconhecido: ${chalk.redBright(err.message)}`);
        }
    }
}
