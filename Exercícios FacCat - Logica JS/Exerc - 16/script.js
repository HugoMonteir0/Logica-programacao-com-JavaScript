let quantidade_maca = parseFloat(prompt("Quantas maça deseja comprar: "))

if (quantidade_maca > 11) {
    let valor_maca = 1.00 * quantidade_maca
    let valor_macaF = valor_maca.toFixed(2)
    alert("O Valor total a ser pago por " + quantidade_maca + " macas é " + "R$ " + valor_macaF)
} else {
    let valor_maca = 1.30 * quantidade_maca
    let valor_macaF = valor_maca.toFixed(2)
    alert("O Valor total a ser pago por " + quantidade_maca + " macas é " + "R$ " + valor_macaF)
}