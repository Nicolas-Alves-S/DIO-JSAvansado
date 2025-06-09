// Esse arquivo é um exemplo de variáveis em JavaScript
// como o tipo de dado que ela armazena

// var var1 = 10;
// var var2 = "Teste";
//
// console.log(var1);
// console.log(var2);

// Aqui mostra como uma variável com a função var pode ser alterada também
//////////////////////////////////////////////////////////////////////////////////////////

// salario();
// function salario() {
//     console.log('Salário');
// } 

// A função salario() é chamada antes de ser declarada. Isso acontece porque o 
// JavaScript faz o hoisting, ou seja, ele eleva a declaração da 
// função para o topo do escopo. Isso significa 
// que você pode chamar a função antes 
// de declará-la no código.
//////////////////////////////////////////////////////////////////////////////////////////
// Qual é a diferença de declarar uma variável e declarar uma função?
// A diferença entre declarar uma variável e declarar uma função em JavaScript é que
// uma variável é um espaço de armazenamento para dados, enquanto uma 
// função é um bloco de código que pode ser chamado e executado.
// Uma variável pode armazenar diferentes tipos de dados, como números, strings, objetos, etc.
// Uma função, por outro lado, é um conjunto de instruções que podem ser executadas quando chamada.
// Abaixo temos um exemplo de uma função que calcula o salário
// com base em um salário base e um bônus.
// A função calcularSalario recebe dois parâmetros: salarioBase e bônus.

function calcularSalario(salarioBase, bonus) {
    var salarioTotal = salarioBase + bonus;
    return salarioTotal;
}
// A função calcularSalario recebe dois parâmetros: salarioBase e bonus.
// Ela calcula o salário total somando o salário base e o bônus, e retorna o resultado.
// Você pode chamar essa função passando os valores desejados como argumentos.

var salarioBase = 3000;
var bonus = 500;
var salarioTotal = calcularSalario(salarioBase, bonus);
console.log("Salário total: " + salarioTotal);
// A função calcularSalario é chamada com os valores de salarioBase e bonus
// e o resultado é armazenado na variável salarioTotal.
// Em seguida, o salário total é exibido no console.