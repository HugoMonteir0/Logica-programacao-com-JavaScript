// Ler os valores de x e y
let x = parseInt(prompt("Digite o primeiro número: "))
let y = parseInt(prompt("Digite o segundo número: "))

// Ler a variavel z que recebe o resultado de x e y
let z = (x * y) + 5

//ler a variavel resposta utilizando o if ternario
let resposta = (z <= 0)? "Resposta: é A" : (z <= 100)? "Reposta: é B" : "Resposta: é C"

alert(resposta)