/*
Nessa aula, vamos aprender um pouco de Prototype
O Prototype é um recurso do JavaScript que permite adicionar novas propriedades e métodos a objetos existentes. 
Isso é útil para estender funcionalidades de objetos nativos ou criar novos comportamentos para eles.
O Prototype é uma parte fundamental do sistema de herança do JavaScript.
Ele permite que objetos herdem propriedades e métodos de outros objetos, criando uma cadeia de protótipos.
*/
// Exemplo simples de como funciona o Prototype
//aqui seria o objeto pai 
const pessoa1 = {
    nome:'Nick',
    idade: 25
}
// aqui seria o objeto filho que herda as propriedades do objeto pai
pessoa1.genero = 'Masculino'; // Adicionando nova propriedade

console.log(pessoa1); // Acessando nova propriedade

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Exemplo de uso do Prototype
const pessoa = {
    idade: 30,
}
const joao = {
    nome: 'João',
    altura: 1.75,
    __proto__: pessoa // Definindo a propriedade protótipo
}
// o metodo __proto__ é usado para definir o protótipo de um objeto que seria percorer ate o objeto pai que seria a
//  função pessoa que tem a propriedade idade,ele roda primeiro o objeto filho e depois o pai se nao tem nada relacionado

console.log(joao.idade); // Acessando a propriedade idade do protótipo
// Adicionando um novo método ao protótipo