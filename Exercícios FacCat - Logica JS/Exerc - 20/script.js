let numero1= parseInt(prompt("Digite um número: "))
let numero2 = parseInt(prompt("Digite outro número: "))

if (numero1 < numero2) {
    alert("Ordem crescente: " + numero1 +", " + numero2)
} else if (numero2 < numero1) {
    alert("Ordem crescente: " + numero2 + ", "  + numero1)
} else {
    alert("Os números sao iguais: " + numero1 + ", "  + numero2)
}

