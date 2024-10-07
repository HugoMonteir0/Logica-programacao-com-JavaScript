// leitura dos 3 valores que representam as medidas dos lados de um triangulo

let a = parseInt(prompt("Digite o primeiro valor: "))
let b = parseInt(prompt("Digite o segundo valor: "))
let c = parseInt(prompt("Digite o terceiro valor: "))

let valor = (a < b + c )? "é um triangulo" : (b < a + c)? "é um triangulo" : (c < a + b)? "é um triangulo" : "não é um triangulo"

alert(valor)