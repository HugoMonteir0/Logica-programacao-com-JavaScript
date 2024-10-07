let hora_trabalhada = parseInt(prompt("Digite as horas trabalhada no mês: "))
let salario_hora = parseFloat(prompt("Digite o seu salário por hora: "))
let hora_extra = 0.50
let salario_total

if (hora_trabalhada > 40) {
    salario_total = (salario_hora * hora_trabalhada) * 4 + (salario_hora * hora_extra) 
    alert(salario_total)
} else {
    salario_total = (salario_hora * hora_trabalhada) * 4
    alert(salario_total)
}

