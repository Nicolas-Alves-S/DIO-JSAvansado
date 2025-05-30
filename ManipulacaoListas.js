// Manipulação de Listas

////////////////////////////////////////////////////////////////////////////////////////////////////////

// forEach
const numeros = [1, 2, 3, 4, 5];
numeros.forEach(function(numero) {
    console.log(numero); // Imprime cada número da lista
});

// Resumindo:
// O método forEach executa a função fornecida para cada elemento do array (numeros).

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Filter
const numerosPares = numeros.filter(function(numero) {
    return numero % 2 === 0; // Filtra os números pares
});
console.log(numerosPares); // Imprime [2, 4]

// Resumindo:
// O método filter cria um novo array contendo apenas os elementos que passam no teste da função fornecida,
// neste caso, os números pares.

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Map
const numerosAoQuadrado = numeros.map(function(numero) {
    return numero * numero; // Eleva cada número ao quadrado
});
console.log(numerosAoQuadrado); // Imprime [1, 4, 9, 16, 25]

// Resumindo:
// O método map cria um novo array com os resultados da aplicação da função fornecida em cada elemento do array,
// neste caso, elevando cada número ao quadrado.

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Reduce
const soma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero; // Soma todos os números
}, 0);
console.log(soma); // Imprime 15

// Resumindo:
// O método reduce reduz o array (numeros) a um único valor (soma),
// aplicando a função fornecida a cada elemento do array e acumulando o resultado,
// começando com o valor inicial fornecido (neste caso, 0).

////////////////////////////////////////////////////////////////////////////////////////////////////////

// join e combinação de funções de manipulação de listas
const numerosString = numeros.map(function(numero) {
    return numero.toString(); // Converte cada número para string
});
const numerosJuntos = numerosString.join(', '); // Junta os números em uma única string
console.log(numerosJuntos); // Imprime "1, 2, 3, 4, 5"

// Resumindo:
// O método map é usado para converter cada elemento do array (numeros) em uma string,
// e o método join junta esses elementos em uma única string, separando-os por vírgula e espaço.

////////////////////////////////////////////////////////////////////////////////////////////////////////
