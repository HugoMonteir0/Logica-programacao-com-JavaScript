// Leitura dos 3 valores
let valor1 = parseInt(prompt("Digite um número: "))
let valor2 = parseInt(prompt("Digite mais um número: "))
let valor3 = parseInt(prompt("Digite mais outro numero: "))

// Comparando e ordenando usando operadores ternários

menor = (valor1 < valor2 && valor1 < valor3) ? valor1 :
        (valor2 < valor1 && valor2 < valor3) ? valor2 : valor3

maior = (valor1 > valor2 && valor1 > valor3) ? valor1 :
        (valor2 > valor1 && valor2 > valor3) ? valor2 : valor3

meio = (valor1 !== menor && valor1 !== maior) ? valor1 :
       (valor2 !== menor && valor2 !== maior) ? valor2 : valor3

// Exibindo os valores em ordem crescente
 alert("Valores em ordem crescente: " + menor + ", " + meio + ", " + maior)