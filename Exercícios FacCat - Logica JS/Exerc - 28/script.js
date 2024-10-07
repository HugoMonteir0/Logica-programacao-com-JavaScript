let numero1 = parseInt(prompt("Digite um número: "))
let numero2 = parseInt(prompt("Digite mais um número: "))
let numero3 = parseInt(prompt("Digite mais outro numero: "))

let mensagem = (numero1 > numero2 && numero1 > numero3)? "O numero " + numero1 + " é maior" : (numero2 > numero1 && numero2 > numero3)? "O numero " + numero2 + " é maior" : numero3  

alert(mensagem)