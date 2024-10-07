let quantidade_atual = parseInt(prompt("Digite a quantidade atual do estoque: "))
let quantidade_maxima = parseInt(prompt("Digite a quantidade máxima do estoque: "))
let quantidade_minima = parseInt(prompt("Digite a quantidade mínima do estoque: "))

let quantidade_media = (quantidade_maxima + quantidade_minima)/2

if (quantidade_atual >= quantidade_media) {
    alert("Não efetuar a compra")
} else {
   alert("Efetuar compra")
}