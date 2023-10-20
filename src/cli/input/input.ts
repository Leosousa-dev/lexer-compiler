export default function getPathFile(): string{
    const args = process.argv.slice(2);

    if(args.length === 0){
        console.error("⛔ Nenhum parâmetro fornecido.\n\nPor favor informe o nome do arquivo que deseja processar")
        process.exit(1);
    }

    return args[0];
};

