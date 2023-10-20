import chalk from "chalk";

export default function getPathFile(): string{
    const args = process.argv.slice(2);

    if(args.length === 0){
        console.error("⛔ Nenhum parâmetro fornecido.\n")
        console.log(`Por favor informe o nome do arquivo que deseja processar.\n\n`)
        console.log(`${chalk.gray("Ex: test.lang\n\n")}`)
        process.exit(1);
    }

    return args[0];
};

