let numero1 = parseInt(prompt("Digite um número: "))
let numero2 = parseInt(prompt("Digite outro número: "))

if (numero1 > numero2) {
    alert("O número " + numero1 + " é maior que o número " + numero2)
} else if (numero1 < numero2) {
    alert("O número " + numero2 + " é maior que o número " + numero1)
} else {
    alert("Os números " + numero1 + " e " + numero2 + " são números iguais")
}