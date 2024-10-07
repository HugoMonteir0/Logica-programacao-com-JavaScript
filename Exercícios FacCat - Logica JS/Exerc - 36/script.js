let idade_homem1 = parseInt(prompt("Digite a idade do primeiro homem: "))
let idade_homem2 = parseInt(prompt("Digite a idade do segundo homem: "))
let idade_mulher1 = parseInt(prompt("Digite a idade da primeira mulher: "))
let idade_mulher2 = parseInt(prompt("Digite a idade da segunda mulher: "))

// Determinando o homem mais velho e a mulher mais nova
const homem_mais_velho = idade_homem1 > idade_homem2 ? idade_homem1 : idade_homem2;
const mulher_mais_nova = idade_mulher1 < idade_mulher2 ? idade_mulher1 : idade_mulher2;

// Determinando o homem mais novo e a mulher mais velha
const homem_mais_novo = idade_homem1 < idade_homem2 ? idade_homem1 : idade_homem2;
const mulher_mais_velha = idade_mulher1 > idade_mulher2 ? idade_mulher1 : idade_mulher2;

// Cálculos
const soma = homem_mais_velho + mulher_mais_nova;
const produto = homem_mais_novo * mulher_mais_velha;

// Saída dos resultados
alert(`A soma das idades do homem mais velho e da mulher mais nova é: ${soma}`);
alert(`O produto das idades do homem mais novo e da mulher mais velha é: ${produto}`);