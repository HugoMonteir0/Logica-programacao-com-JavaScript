var valor_carro_fabrica = parseFloat(prompt("Digite o valor de fabrica de carro: "))
var distribuidor = 0.28
var impostos = 0.45

var valor_final = valor_carro_fabrica + (valor_carro_fabrica * distribuidor) + (valor_carro_fabrica * impostos)

alert(valor_final)