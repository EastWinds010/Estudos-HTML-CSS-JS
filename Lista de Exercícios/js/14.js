// Faça um programa que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre,
// e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo:
//   Média de Aproveitamento  Conceito
//   Entre 9.0 e 10.0        A
//   Entre 7.5 e 9.0         B
//   Entre 6.0 e 7.5         C
//   Entre 4.0 e 6.0         D
//   Entre 4.0 e zero        E

function E14(){
    let nota1 = parseFloat(window.prompt("Digite a primeira nota (0 a 10)"));
    let nota2 = parseFloat(window.prompt("Digite a segunda nota (0 a 10)"));
    let media = (nota1+nota2)/2;

    if(media >= 9 && media <= 10){
        Resposta14.value = ("Média de Aproveitamento: "+media+" Conceito: A 'APROVADO'");
    }else if(media >= 7.5 && media <= 8.9){
        Resposta14.value = ("Média de Aproveitamento: "+media+" Conceito: B 'APROVADO'");
    }else if(media >= 6 && media <= 7.4){
        Resposta14.value = ("Média de Aproveitamento: "+media+" Conceito: C 'APROVADO'");
    }else if(media >= 4 && media <= 5.9){
        Resposta14.value = ("Média de Aproveitamento: "+media+" Conceito: D 'REPROVADO'");
    }else if(media <= 3.9){
        Resposta14.value = ("Média de Aproveitamento: "+media+" Conceito: E 'REPROVADO'");
    }else{
        Resposta10.value = ("ERRO")
    }

}