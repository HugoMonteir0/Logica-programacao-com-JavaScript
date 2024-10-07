let ano_atual = parseInt(prompt("Digite o ano atual: "))
let ano_nascimento = parseInt(prompt("Digite o ano do seu nascimeto: "))

let idade = ano_atual - ano_nascimento

if (idade >= 18) {
    alert("Você tem " + idade + " anos," + " já pode votar neste ano")
} else {
    alert("Você tem " + idade + " anos," + " não pode votar neste ano")
}