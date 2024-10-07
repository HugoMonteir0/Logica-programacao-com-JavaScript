let nota1 = parseFloat(prompt("Digite sua primeira nota: "))
let nota2 = parseFloat(prompt("Digite sua seguda nota: "))

let media =  (nota1 + nota2) / 2 
let mediaF = media.toFixed(1)

if (mediaF >=6) {
    alert("Sua nota foi: " + mediaF + ". Parabéns, Você foi aprovado!")
} else {
    alert("Sua nota foi: " + mediaF + ". Sinto muito, Você foi reprovado!")
}