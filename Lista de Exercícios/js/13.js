// Faça um Programa que leia um número e exiba o dia correspondente da semana. 
// (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.

function E13(){
    let dia = parseInt(window.prompt("Digite um número para o dia da semana (Ex: 1 = Domingo)"));

    if(dia == 1){
        Resposta13.value = ("Domingo");
    }else if(dia == 2){
        Resposta13.value = ("Segunda-Feira")
    }else if(dia == 3){
        Resposta13.value = ("Terça-Feira")
    }else if(dia == 4){
        Resposta13.value = ("Quarta-Feira")
    }else if(dia == 5){
        Resposta13.value = ("Quinta-Feira")
    }else if(dia == 6){
        Resposta13.value = ("Sexta-Feira")
    }else if(dia == 7){
        Resposta13.value = ("Sábado")
    }else{
        Resposta10.value = ("ERRO")
    }
}