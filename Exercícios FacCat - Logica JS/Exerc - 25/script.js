let numero_conta_cliente = parseInt(prompt("Digite o número da sua conta: "))
let saldo = parseFloat(prompt("Digite o valor atual do seu saldo: "))
let debito = parseFloat(prompt("Digite o valor que deseja debitar: "))
let credito = parseFloat(prompt("Digite o valor atual do seu credito: "))

let saldo_atual =  saldo - debito + credito

if (saldo_atual >= 0) {
    alert("O seu saldo é positivo! Saldo atual: " + saldo_atual)
} else {
    alert("O seu saldo é negativo! Saldo atual: " + saldo_atual)
}
