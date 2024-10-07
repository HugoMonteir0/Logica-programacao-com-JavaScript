let nome = prompt("Digite seu nome: ")
let sexo = prompt("Digite o seu sexo: ")
let altura = parseFloat(prompt("Digite quantos centimetros você tem: "))/100
let peso_ideal

if ( sexo == "masculino") {
    peso_ideal = (72.7 * altura) - 58 
    alert("O seu peso atual é: " + peso_ideal)
} else if (sexo == "feminino") {
    peso_ideal = (62.1 * altura) - 44.7
    alert("O seu peso ideal é: " + peso_ideal)
}




