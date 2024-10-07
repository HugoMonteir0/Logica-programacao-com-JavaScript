var salario = parseFloat(prompt("Digite o seu salário: "))
var carro_vendido = parseInt(prompt("Digite a quantidade de carros vendidos: "))
var venda_total = parseInt(prompt("Digite o total de vendas em reais: "))
var comissao_fixa = parseInt(prompt("Digite o valor da sua comissao em reais a cada carro vendido : "))

var comissao_venda_total = 0.5

var  salario_final = salario + (comissao_fixa * carro_vendido) + (venda_total * comissao_venda_total)
var salario_finalF = salario_final.toFixed(2)

alert(salario_finalF)