let numero1 = parseInt(prompt("Digite um número: "))
let numero2 = parseInt(prompt("Digite mais um número: "))
let numero3 = parseInt(prompt("Digite mais outro numero: "))

//soma dos dois maiores valores
let soma = (numero1 > numero2 && numero1 > numero3) ? (numero2 > numero3 ? numero1 + numero2 : numero1 + numero3 ) : (numero2 > numero1 && numero2 > numero3)? (numero1 > numero3 ? numero2 + numero1 : numero2 + numero3 ) : (valor1 > valor2 ? valor3 + valor1 : valor3 + valor2)

alert("A soma dos dois maiores valores é: " + soma)