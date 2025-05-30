// First-Class Functions
// Higher-Order Functions

// Funções de primeira classe
// Funções são tratadas como cidadãos de primeira classe em JavaScript, o que 
// significa que podem ser atribuídas a variáveis, passadas 
// como argumentos para outras funções e retornadas de outras funções.

// Resumo
// Aqui estão algumas das principais características das funções de primeira classe:
// E mostra que uma função pode ser atribuída a uma variável ou função pra função, passada 
// como argumento para outra função e retornada de outra função.

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Funções como valores

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function falarMeuNome() {
  console.log('Meu nome é Nicolas')
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Funções como argumentos

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function falarmeunomecompleto(falarMeuNome) {
  falarMeuNome();
  console.log('Alves da Silva')
}
falarmeunomecompleto(falarMeuNome)

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Funções de declaração
// function expressão
// function declaration

////////////////////////////////////////////////////////////////////////////////////////////////////////

// function expressão

//////////////////////////////////////////////////////////////////////////////////////////////////////

function nomedaFuncao() { // function declaration
  console.log('nomedaFuncao')
}
const nomedeOutraFuncao = function () { // function expressão
  console.log('nomedeOutraFuncao')
}
nomedaFuncao()
nomedeOutraFuncao()

// A principal diferença entre elas seria o hoisting, que é o comportamento de mover as declarações de função 
// para o topo do escopo (variável ou função) antes da execução do código. Ou seja, a function 
// declaration pode ser chamada antes de ser declarada.

// Resumindo:
// function declaration: pode ser chamada antes de ser declarada e aceita tanto nomeação quanto atribuição a variáveis 
// e tem menos capacidades de dados e pode ser atribuída a variáveis

// function expression: não pode ser chamada antes de ser declarada e aceita 
// apenas nomeação e tem mais capacidades de dados e pode ser atribuída a variáveis

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Declaração explícita e arrow function
// Adicionando uma nova propriedade ao objeto filho

function funtion1() {
  console.log(this);
  console.log('Função declarada chamada por ' + this.nome);
  console.log('Arrow function chamada por ' + this.nome);
  // A função declarada tem seu próprio this, que é o objeto que a chamou
}

const funtion2 = function() {
  console.log(this);
  console.log('Arrow function chamada por ' + this.nome);
  console.log('Função declarada chamada por ' + this.nome);
  // Agora a função regular tem seu próprio this, que é o objeto que a chamou
}

const pedrinho = {
  nome: 'Pedrinho',
  funtion1, // Usando a função declarada
  funtion2  // Usando a arrow function
};
pedrinho.funtion1(); // Chamando a função declarada
pedrinho.funtion2(); // Chamando a arrow function

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Closure
// Uma closure é uma função que tem acesso ao escopo (variável ou função) de uma
// função externa mesmo após a função externa ter sido executada.
function criarContador() {
  let contador = 0; // Variável privada

  return function() { // Retorna uma função que tem acesso à variável privada
    contador++; // Incrementa o contador, ele soma 1 toda vez que a função é chamada
    console.log('Contador:', contador);
  };
} 
// Ou seja, ela serve para encapsular variáveis e criar escopos (variável ou função) privados.
const contador = criarContador(); // Cria um contador
contador(); // Contador: 1
contador(); // Contador: 2

// Resumindo:
// Ele seria um laço que permite que uma função acesse variáveis de seu escopo (variável ou função) 
// externo mesmo após a execução dessa função externa.
// Ele serve para dentro da função e fora também, ou seja, ele tem acesso ao escopo (variável ou função) 
// de uma função externa mesmo após a função externa ter sido executada.
// Ele é usado para encapsular variáveis e criar escopos (variável ou função) privados,
// permitindo que você mantenha o estado entre as chamadas de função.
// Ele é útil para criar funções que mantêm estado, como contadores, caches e closures de eventos.

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Fechamento
// Um fechamento é uma função que "lembra" o ambiente em que foi criada,
// mesmo que esse ambiente não esteja mais disponível.
// Ele é criado quando uma função é definida dentro de outra função e a função interna
// tem acesso às variáveis da função externa.
// Ou seja, ele tem acesso às variáveis externas ou internas da função que já foi criada.
function criarMultiplicador(fator) {
  return function(numero) {
    return numero * fator; // A função interna tem acesso à variável 'fator'
  };
}
const dobrar = criarMultiplicador(2); // Cria uma função que dobra o número
const triplicar = criarMultiplicador(3); // Cria uma função que triplica o número
console.log(dobrar(5)); // 10
console.log(triplicar(5)); // 15

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Invocação Direta

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// A invocação direta é quando uma função é chamada diretamente pelo seu nome,
// sem ser atribuída a uma variável ou passada como argumento para outra função.
function saudacao() {
  console.log('Olá, mundo!');
}
saudacao(); // Chamada direta da função

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Invocação Indireta

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// A invocação indireta é quando uma função é chamada através de uma referência,
// como uma variável ou uma função de ordem superior.
function saudacaoIndireta() {
  console.log('Olá, mundo indireto!');
}
const funcaoReferencia = saudacaoIndireta; // Atribuição da função a uma variável
funcaoReferencia(); // Chamada indireta da função através da variável

// Ou
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const p1 = new Pessoa("Nicolas", 18);
console.log(p1); 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Invocação com Call

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// A invocação com call é quando uma função é chamada com um contexto específico,
// usando o método call() para definir o valor de this dentro da função.
function saudacaoComCall() {
  console.log(`Olá, meu nome é ${this.nome}`);
}
const pessoa = { nome: 'Nicolas' };
saudacaoComCall.call(pessoa); // Chamada com call, definindo o contexto

// Resumindo:
// Ele é usado para chamar uma função com um contexto específico, neste caso o objeto pessoa,
// permitindo que a função acesse as propriedades do objeto através do this.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Invocação com Apply

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// A invocação com apply é semelhante ao call, mas permite passar os argumentos como um array.
function saudacaoComApply(idade) {
  console.log(`Olá, meu nome é ${this.nome} e tenho ${idade} anos`);
}
const pessoa2 = { nome: 'Nicolas' };
saudacaoComApply.apply(pessoa2, [18]); // Chamada com apply, passando argumentos como array

// Resumindo:
// Ele é usado para chamar uma função com um contexto específico, neste caso o objeto pessoa2,
// permitindo que a função acesse as propriedades do objeto através do this e passando os argumentos como um array.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Invocação com operador new

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// A invocação com o operador new cria uma nova instância de um objeto,
// chamando uma função construtora e atribuindo o contexto ao novo objeto.
function PessoaNova(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
const p2 = new PessoaNova("Lavinia", 28); // Cria uma nova instância de PessoaNova
console.log(p2); // Exibe o objeto criado

// Resumindo:
// Ele é usado para criar uma nova instância como um objeto, com uma função construtora que já foi criada,
// atribuindo o contexto ao novo objeto e permitindo que você crie objetos com propriedades e métodos.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Menção Honrosa aos callbacks

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Os callbacks são funções passadas como argumentos para outras funções,
// que são executadas em um momento posterior, geralmente após a conclusão de uma operação assíncrona.
function operacaoAssincrona(callback) {
  setTimeout(() => {
    console.log('Operação concluída');
    callback(); // Chama o callback após a conclusão da operação
  }, 1000);
}
console.log('Iniciando operação assíncrona...');
console.log('Aguarde...');
callback = () => {
  console.log('Callback executado após a operação assíncrona');
}
operacaoAssincrona(callback); // Passa o callback para ser executado após a operação

// Resumindo:
// Ele é usado para passar uma função como argumento para outra função. Ele serve como uma forma de espera para que a 
// função seja executada após a conclusão de uma operação assíncrona (como uma requisição de rede ou um temporizador),
// permitindo que você execute código adicional após a conclusão da operação.
