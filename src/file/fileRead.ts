import path from "node:path";
import fs from "node:fs";
import getPathFile from "../cli/input/input";

const fileName = getPathFile()  // <- get param[pathFile]

const currentDir = process.cwd() // <- get current path

const fullPath = path.join(currentDir, fileName);


const argv = fs.readFileSync(fullPath, 'utf-8')


console.log("test:", argv);
