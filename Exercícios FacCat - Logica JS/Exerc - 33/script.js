// leitura de 2 valores 

let valor1 = parseInt(prompt("Digite o primeiro valor: "))
let valor2 = parseInt(prompt("Digite o segundo valor: "))


let resultado = (valor1 > valor2)? "O primeiro valor é maior que o segundo valor!" + " Primeiro Valor: " + valor1 + " e Segundo Valor: " + valor2 : (valor2 > valor1)? "O segundo valor é maior que o primeiro valor!" + " Segundo Valor: " + valor2 + " e Primeiro Valor: " + valor1 : "Os valores são iguais!" + " Primeiro Valor: " + valor1 + " e Segundo Valor: " + valor2

alert(resultado)