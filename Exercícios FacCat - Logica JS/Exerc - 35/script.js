// Ler as variaveis alcool e gasolina
let litro = prompt("Quantos litros deseja colocar: ")
let tipo_combustivel = prompt("Qual tipo de combustivel será? álcool ou gasolina: ")

// Definindo os preços dos combustíveis
const preco_alcool = 2.90
const preco_gasolina = 3.30


const preco_por_litro = tipo_combustivel === 'alcool' ? preco_alcool : preco_gasolina

// Calculando o desconto baseado no tipo de combustível e na quantidade de litros
const desconto = tipo_combustivel === 'alcool' 
    ? (litro <= 20 ? 0.03 : 0.05) 
    : (litro <= 20 ? 0.04 : 0.06)

// Calculando o valor total com o desconto aplicado
const valor_total = litro * preco_por_litro * (1 - desconto)

// Exibindo o resultado
alert(`O valor a ser pago é R$ ${valor_total.toFixed(2)}`)

