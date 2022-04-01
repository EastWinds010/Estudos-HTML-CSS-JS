// // // Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são do 
// // Imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o 
// // FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita). 
// // O Salário Líquido corresponde ao Salário Bruto menos os descontos. 
// // O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.
// // // Desconto do IR:
// // // Salário Bruto até 900 (inclusive) - isento
// // // Salário Bruto até 1500 (inclusive) - desconto de 5%
// // // Salário Bruto até 2500 (inclusive) - desconto de 10%
// // // Salário Bruto acima de 2500 - desconto de 20% Imprima na tela as informações, dispostas conforme 
// o exemplo abaixo. No exemplo o valor da hora é 5 e a quantidade de hora é 220.
function E12(){
    let salarioBruto = window.prompt("Digite o valor do salário: ");
    if(salarioBruto <= 900){
        let ir = 0;
        let sindicato = salarioBruto*0.03;
        let fgts = salarioBruto*0.11;
        let salarioLiquido = salarioBruto - (ir+sindicato);
        Resposta12.value = ("Salário Bruto:"+salarioBruto+" R$ Imposto de Renda: Isento Sindicato"+sindicato+" R$ FGTS: "+fgts+" R$ Salário Líquido: "+salarioLiquido);
    }else if(salarioBruto >= 900.01 && salarioBruto <= 1500){
        let ir = salarioBruto*0.05;
        let sindicato = salarioBruto*0.03;
        let fgts = salarioBruto*0.11;
        let salarioLiquido = salarioBruto - (ir+sindicato);
        Resposta12.value = ("Salário Bruto:"+salarioBruto+" R$ Imposto de Renda:"+ir+"R$ Sindicato"+sindicato+" R$ FGTS: "+fgts+" R$ Salário Líquido: "+salarioLiquido);
    }else if (salarioBruto >= 1500.01 && salarioBruto <= 2500){
        let ir = salarioBruto*0.10;
        let sindicato = salarioBruto*0.03;
        let fgts = salarioBruto*0.11;
        let salarioLiquido = salarioBruto - (ir+sindicato);
        Resposta12.value = ("Salário Bruto:"+salarioBruto+" R$ Imposto de Renda:"+ir+"R$ Sindicato"+sindicato+" R$ FGTS: "+fgts+" R$ Salário Líquido: "+salarioLiquido);
    }else if (salarioBruto >=2500.01){
        let ir = salarioBruto*0.20
        let sindicato = salarioBruto*0.03;
        let fgts = salarioBruto*0.11;
        let salarioLiquido = salarioBruto - (ir+sindicato);
        Resposta12.value = ("Salário Bruto:"+salarioBruto+" R$ Imposto de Renda:"+ir+"R$ Sindicato"+sindicato+" R$ FGTS: "+fgts+" R$ Salário Líquido: "+salarioLiquido)
    }else{
        Resposta10.value = ("ERRO")
    }
}