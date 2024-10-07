var salario = parseInt(prompt("Digite o seu sálario atual: "))
var reajuste = parseInt(prompt("Digite o valor do reajuste: "))

var salario_novo =  (salario * reajuste) / 100 + salario
var salario_novoF = salario_novo.toFixed(2)



alert("O seu salário novo é: " + "R$" + salario_novoF)