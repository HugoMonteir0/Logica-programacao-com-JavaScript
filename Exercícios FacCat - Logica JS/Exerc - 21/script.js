let inicio = parseInt(prompt("Digite a hora que o jogo começou: "))
let fim = parseInt(prompt("Digite a hora que foi finalizado o jogo: "))
let duracao

if (fim > inicio) {
    duracao = fim - inicio
    alert("A duração do jogo foi: " + duracao + " horas.");
} else {
    duracao = (24 - inicio) + fim
    alert("A duração do jogo foi: " + duracao + " horas.");
}
