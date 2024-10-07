let salario_fixo = parseFloat(prompt("Digite o seu salário: "))
let valor_vendas = parseFloat(prompt("Digite o valor das vendas: "))
let salario_final

if (valor_vendas < 1500) {
    salario_final = salario_fixo + (valor_vendas * 0.03)
    alert(salario_final)
} else if (valor_vendas >= 1500) {
    salario_final = salario_fixo + (valor_vendas * 0.08)
    alert(salario_final)
}