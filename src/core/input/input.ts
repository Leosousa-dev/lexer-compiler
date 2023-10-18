import readLine from "readline";


const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});



console.log('Bem-vindo à sua CLI interativa!');

function processPath(path) {
    // Coloque aqui a lógica de processamento do caminho
    console.log('Você inseriu o seguinte caminho:', path);
    // Continuar interagindo com a CLI
    rl.prompt();
  }
  
  rl.question("Por favor, insira um caminho:", (path) =>{
        console.log(path)
  })

  rl.on('line', (line) => {
    if (line === 'exit') {
      console.log('Saindo da CLI...');
      rl.close();
    } else {
      console.log('Você digitou:', line);
      rl.prompt();
    }
  });
  
  rl.on('close', () => {
    console.log('CLI encerrada.');
    process.exit(0);
  });
  