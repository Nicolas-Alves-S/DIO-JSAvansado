/*
Nessa aula, vamos aprender um pouco de Prototype
O Prototype é um recurso do JavaScript que permite adicionar novas propriedades e métodos a objetos existentes. 
Isso é útil para estender funcionalidades de objetos nativos ou criar novos comportamentos para eles.
O Prototype é uma parte fundamental do sistema de herança do JavaScript.
Ele permite que objetos herdem propriedades e métodos de outros objetos, criando uma cadeia de protótipos.
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Exemplo simples de como funciona o Prototype

/////////////////////////////////////////////////////////////////////////////////////////////////////////

const pessoa1 = {
    nome: 'Nick',
    idade: 25
};
// Adicionando nova propriedade ao objeto pai
pessoa1.genero = 'Masculino'; 
console.log(pessoa1); // Acessando nova propriedade

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Exemplo de uso do Prototype com __proto__

/////////////////////////////////////////////////////////////////////////////////////////////////////////

const pessoa = {
    idade: 30,
};
const joao = {
    nome: 'João',
    altura: 1.75,
    __proto__: pessoa // Definindo a propriedade protótipo
};
console.log(joao.idade); // Acessando a propriedade idade do protótipo

// Adicionando um novo método ao protótipo
pessoa.falar = function() {
    console.log(`Olá, meu nome é ${this.nome}`);
};
joao.falar(); // Chamando o método do protótipo

// Adicionando uma nova propriedade ao protótipo
pessoa.profissao = 'Desenvolvedor';
console.log(joao.profissao); // Acessando a nova propriedade do protótipo

// Adicionando uma nova propriedade ao objeto filho
joao.genero = 'Masculino';
console.log(joao.genero); // Acessando a nova propriedade do objeto filho

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Exemplo de uso do operador `new` e função construtora

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function Pessoa2(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}
console.log(new Pessoa2('Nick', 25)); // Criando um novo objeto com o operador `new`

// Adicionando um novo método ao protótipo da função construtora
Pessoa2.prototype.falar = function() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
};

const maria = new Pessoa2('Maria', 28); // Criando um novo objeto
maria.falar(); // Chamando o método do protótipo

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Exemplo de uso de `call` para herança de propriedades

/////////////////////////////////////////////////////////////////////////////////////////////////////////

const marcelo = {
    genero: 'Masculino',
    profissao: 'Desenvolvedor',
};
Pessoa2.call(marcelo, 'nome', 30); // Chamando o método do protótipo
console.log(marcelo); // Acessando a nova propriedade do objeto pai
