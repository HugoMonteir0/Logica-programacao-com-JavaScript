// ler o nome de dois times

let time1 = prompt("Digite o nome do primeiro time: ")
let time2 = prompt("Digite o nome do segundo time: ")
//ler o numero de gols marcado pelo os dois times
let gol_time1 = parseInt(prompt("Digite o número de gols marcado pelo o " + time1 + ": "))
let gol_time2 = parseInt(prompt("Digite o número de gols marcado pelo o " + time2 + ": "))

// Comparando e ordenando usando operadores ternários

let resultado = (gol_time1 > gol_time2)? "Vitória do " + time1 + "Placar final: " + time1 + " " + gol_time1 + " X " + time2 + " " + gol_time2 : (gol_time2 > gol_time1)? "Vitória do " + time2 + "Placar final: " + time2 + " " + gol_time2 + " X " + time1 + " " + gol_time1 : "Partida terminou em empate! " + "Placar final: " + time1 + " " + gol_time1 + " X " + time2 + " " + gol_time2

alert(resultado)