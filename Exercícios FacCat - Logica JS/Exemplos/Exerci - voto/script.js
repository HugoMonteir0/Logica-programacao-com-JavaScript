let idade = parseInt(prompt("Digite a sua idade: "))

if (idade < 16) {
    alert("Você não pode votar")
} else 
    if (idade < 18) {
        alert("O voto é opcional")
    } else {
         alert("O voto é obrigatório")     
    }
