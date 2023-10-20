import path from "node:path";
import fs from "node:fs";

const fileName = "tasks.md"

const currentDir = process.cwd()

const fullPath = path.join(currentDir, fileName);


const argv = fs.readFileSync(fullPath, 'utf-8')


console.log("test:", argv);
