import outPut from "../output/out";

export default function getPathFile(): string{
    const args = process.argv.slice(2);

    if(args.length === 0){
        outPut("⛔: Nenhum parâmetro fornecido.\n","Por favor informe o nome do arquivo que deseja processar.\n\n")
        process.exit(1);
    }

    return args[0];
};

