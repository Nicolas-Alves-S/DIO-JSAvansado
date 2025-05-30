/////////////////////////////////////////////////////////////////////////////////////////

//Assincronismo com Promises

//////////////////////////////////////////////////////////////////////////////////////////
//Funcionamento das Promises
// Uma Promise é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona.
// ela pode esperar por uma operação assíncrona ser concluída e, quando isso acontecer, ela pode ser 
// resolvida ou rejeitada.
//seria um objeto que nao tem o valor imediato, mas que terá no futuro e eu nao tenho como controlar ele e
// ele pode ser resolvido ou rejeitado.

new Promise((resolve, reject) => {//aqui eu crio uma promise que tem uma função que recebe dois parametros, 
// resolve e reject ai eu posso chamar esses dois parametros quando eu quiser, e aqui eu faço uma operação assíncrona
  // Simulando uma operação assíncrona com setTimeout
  //...
  resolve("Operação concluída com sucesso!"); // Chama resolve quando a operação é bem-sucedida
  //.....
  reject("Erro na operação!"); // Chama reject quando a operação falha

})
//resumindo, a promise é um objeto que representa uma operação assíncrona que pode ser resolvida ou rejeitada no futuro.

const promesssaDeUmNumeroQualquer = new Promise((resolve, reject) => {
const numero = parseInt(Math.random() * 100); // Gera um número aleatório entre 0 e 9
resolve(numero); // Resolve a promise com o número gerado
})
// Resolvendo a promise
promesssaDeUmNumeroQualquer
.then((value) => {
    console.log(`O número gerado foi: ${value}`) // Imprime o número gerado
})
.catch(error => {
    console.error(`Erro: ${error}`); // Imprime o erro caso a promise seja rejeitada
})
.finally(() => {
    console.log("Operação finalizada."); // Imprime uma mensagem quando a operação é concluída, independentemente de sucesso ou falha
});
//resumindo o código acima:
// A promise é criada com uma operação assíncrona que gera um número aleatório.
// Quando a promise é resolvida, o número gerado é impresso no console.
//ele sorteia um número aleatório entre 0 e 99 e o imprime no console quando a promise é resolvida.
/////////////////////////////////////////////////////////////////////////////////////////

//Agora com assincronismo

////////////////////////////////////////////////////////////////////////////////////////
const promesssaDeUmNumeroQualquer2 = new Promise((resolve, reject) => {
    setTimeout(() => {
    const numero = parseInt(Math.random() * 100); // Gera um número aleatório entre 0 e 9
    resolve(numero); // Resolve a promise com o número gerado
    }
    , 1000)
}); // Simula uma operação assíncrona com um atraso de 2 segundos
    // Resolvendo a promise
    promesssaDeUmNumeroQualquer2
    .then((value) => {
        console.log(`O número gerado foi: ${value}`) // Imprime o número gerado
    })
    
    .catch(error => {
        console.error(`Erro: ${error}`); // Imprime o erro caso a promise seja rejeitada
    })
    .finally(() => {
        console.log("Operação finalizada."); // Imprime uma mensagem quando a operação é concluída, independentemente de sucesso ou falha
    });

//resumindo o código acima:
// A promise é criada com uma operação assíncrona que gera um número aleatório após um atraso de 1 segundo.
// Quando a promise é resolvida, o número gerado é impresso no console.
/////////////////////////////////////////////////////////////////////////////////////////////////////
// Encadeamento de Promises
// Podemos encadear várias Promises usando o método then.
//Sobre os then ele pode ser utilizado varias vezes, e cada then vai receber o retorno do anterior, 
// ou seja, o retorno do primeiro then é o parametro do segundo then, e assim por diante.
const promesssaDeUmNumeroQualquer3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100); // Gera um número aleatório entre 0 e 9
        resolve(numero); // Resolve a promise com o número gerado
    }, 1000);
});
// Resolvendo a promise
promesssaDeUmNumeroQualquer3
    .then((value) => {
        console.log(`O número gerado foi: ${value}`); // Imprime o número gerado
        return value * 2; // Retorna o dobro do número gerado
    })
    .then((doubledValue) => {
        console.log(`O dobro do número é: ${doubledValue}`); // Imprime o dobro do número
        return doubledValue * 3; // Retorna o dobro mais 10
    })
    .then((triplica) => {
        console.log("O triplo do número é: " + (triplica)); // Imprime o triplo do número
    })

    .catch(error => {
        console.error(`Erro: ${error}`); // Imprime o erro caso a promise seja rejeitada
    })
    .finally(() => {
        console.log("Operação finalizada."); // Imprime uma mensagem quando a operação é concluída, independentemente de sucesso ou falha
        console.log("")
    });
//resumindo o código acima:
// A promise é criada com uma operação assíncrona que gera um número aleatório após um atraso de 1 segundo.
// Quando a promise é resolvida, o número gerado é impresso no console.
// Em seguida, o dobro do número é calculado e impresso.
// Depois, o triplo do número é calculado e impresso.
// O encadeamento de then permite realizar várias operações sequenciais com os resultados anteriores.
// Se uma das Promises falhar, o fluxo será interrompido e o erro será tratado no catch.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Manipulando arquivos através de Promises

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
setTimeout(() => {//So tem o settimeout pra nao ser execultado antes do outro codigo.
    console.log("Aguardei 2 segundos");
// Simula uma operação assíncrona com um atraso de 2 segundos
const fs = require('fs')// Importa o módulo fs com suporte a Promises
// Função para ler um arquivo usando Promises
const promesaDaLeituraDoArquivo = fs.promises.readFile('Tarefas.csv')

// Resolvendo a promise
promesaDaLeituraDoArquivo
    .then((arquivo) => {
       console.log(arquivo.toString('utf8')); // Imprime o conteúdo do arquivo como string
    })
    .catch(error => {
        console.error(`Erro ao ler o arquivo: ${error}`); // Imprime o erro caso a leitura do arquivo falhe
    })
    .finally(() => {
        console.log("Operação de leitura do arquivo finalizada."); // Imprime uma mensagem quando a operação é concluída, independentemente de sucesso ou falha
        console.log("");
    });}, 2000); 
//resumindo o código acima:
// O código lê um arquivo chamado "Tarefas.csv" usando Promises.
// Quando a leitura é bem-sucedida, o conteúdo do arquivo é impresso no console.
// Se ocorrer um erro durante a leitura, o erro é impresso no console.
// O finally garante que uma mensagem de conclusão seja impressa, independentemente do sucesso ou falha da leitura.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Utilizando o path para ler arquivos de diferentes caminhos

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//tambom posso colocar o path do arquivo como parametro da função readFile(caminhoDoArquivo),
// o que me permite ler arquivos de diferentes caminhos sem precisar alterar o código principal.
// assim posso ler qualquer arquivo que eu quiser, desde que o caminho esteja correto.
setTimeout(() => {
    console.log("Aguardei 3 segundos");
const fs = require('fs'); // Importa o módulo fs
const caminhoDoArquivo = 'Tarefas.csv'; // Caminho do arquivo a ser lido
const path = require('path'); // Importa o módulo path para manipulação de caminhos de arquivos
// Função para ler um arquivo usando Promises
const filepath = path.resolve(__dirname, caminhoDoArquivo/*ou caminho*/); // Resolve o caminho absoluto do arquivo
const promesaDaLeituraDoArquivo2 = fs.promises.readFile(filepath); // Lê o arquivo com codificação 
// Resolvendo a promise
promesaDaLeituraDoArquivo2
    .then((arquivo) => {
        console.log(arquivo.toString('utf8')); // Imprime o conteúdo do arquivo como string
    })
    .catch(error => {
        console.error(`Erro ao ler o arquivo: ${error}`); // Imprime o erro caso a leitura do arquivo falhe
    })
    .finally(() => {
        console.log("Operação de leitura do arquivo finalizada."); // Imprime uma mensagem quando a operação é concluída, independentemente de sucesso ou falha
    });
}
, 3000);
//resumindo o código acima:
// O código lê um arquivo chamado "Tarefas.csv" usando Promises.
//e ele resolve conforme o outro codigo,A função path.resolve é usada para obter o caminho absoluto do arquivo,
// permitindo que o código funcione corretamente em diferentes sistemas de arquivos.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// manipulando then 
setTimeout(() => {
    const fs = require('fs'); // Importa o módulo fs
    const path = require('path'); // Importa o módulo path para manipulação de caminhos de arquivos
   
    const filepath = path.resolve(__dirname, 'Tarefas.csv'); // Resolve o caminho absoluto do arquivo

    const promesaDaLeituraDoArquivo3 = fs.promises.readFile(filepath)

    promesaDaLeituraDoArquivo3 // Lê o arquivo com codificação
    .then((arquivo) => arquivo.toString('utf8')) // Converte o conteúdo do arquivo para string
    .then((textodoArquivo) => textodoArquivo.split('\n').slice(1)) // Divide o conteúdo do arquivo em linhas
    .then((linhasSemCabeçalho) => linhasSemCabeçalho.map((linha) => {
        const [nome, feito] = linha.split(';') // Divide cada linha em nome e feito
        return { 
            nome, 
            feito: feito === 'true' // Converte o valor de feito para booleano
        } 
    }))
    .then((listadeTarefas) => {
        console.log(listadeTarefas); // Imprime a lista de tarefas
    })
    .catch(error => {
        console.error(`Erro ao ler o arquivo: ${error}`); // Imprime o erro caso a leitura do arquivo falhe
    });

}, 4000); // Aguarda 4 segundos antes de executar o código

