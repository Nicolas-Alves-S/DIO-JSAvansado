/*
Tipos de dados mais utilizados em JavaScript:

1. String: sequência de caracteres usada para representar texto.
2. Number: números, tanto inteiros quanto de ponto flutuante.
3. Boolean: valores lógicos, que podem ser true (verdadeiro) ou false (falso).
4. Object: coleções de pares chave-valor, usados para armazenar dados estruturados.
5. Array: objetos especiais que armazenam listas de valores.
6. Null: representa a ausência intencional de qualquer valor ou objeto.
7. Undefined: representa uma variável declarada, mas não inicializada.
8. Symbol: tipo primitivo que representa um valor único e imutável.
*/

// --- String ---
var nome = "João";
console.log(nome);

var nome2 = 'Maria';
console.log(nome2);

// --- Number ---
var idade = 30;
console.log(idade);

// Number com ponto flutuante
var altura = 1.75;
console.log(altura);

// --- Boolean ---
var isAtivo = true;
console.log(isAtivo);

// --- Object ---
// Objetos armazenam dados estruturados em pares chave-valor
var pessoa = {
    nome: "Maria",
    idade: 25,
    isAtivo: false
};
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.nome + " tem " + pessoa.idade + " anos.");
console.log("Idade + 5:", pessoa.idade + 5); // operação matemática

// --- Array ---
// Lista de valores
var numeros = [1, 2, 3, 4, 5];
console.log(numeros);

// --- Null ---
// Valor nulo proposital
var valorNulo = null;
console.log(valorNulo);

// --- Undefined ---
// Variável declarada mas não inicializada
var valorIndefinido;
console.log(valorIndefinido);

// --- Symbol ---
// Valor único e imutável
var simbolo = Symbol("descricao do simbolo");
console.log(simbolo);
