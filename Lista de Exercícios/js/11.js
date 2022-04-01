// As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contraram para 
// desenvolver o programa que calculará os reajustes.
// Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no 
// salário atual:<br>
//  - salários até R$ 280,00 (incluindo) : aumento de 20%<br>
//  - salários entre R$ 280,00 e R$ 700,00 : aumento de 15%<br>
//  - salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%<br>
//  - salários de R$ 1500,00 em diante : aumento de 5% 
// Após o aumento ser realizado, informe na tela:<br>
//  - o salário antes do reajuste<br>
//  - o percentual de aumento aplicado<br>
//  - o valor do aumento<br>
//  - o novo salário, após o aumento.

function E11() {
    const sal_a = parseFloat(window.prompt("Digite o Salário: "));
    let va = 0;
    let sal_n = 0;
    if (sal_a <= 280.00){
      va = sal_a * 0.20;
      sal_n = sal_a + va;
      Resposta11.value = ("Salário Atual: "+sal_a+"% Aumento Aplicado: 20% Valor do Aumento: "+ va +"Salário Novo: "+ sal_n) 
    }else if (sal_a >= 280.01 && sal_a <= 700.00){
      va = sal_a * 0.15;
      sal_n = sal_a + va;
      Resposta11.value = ("Salário Atual: "+sal_a+"% Aumento Aplicado: 15% Valor do Aumento: "+ va + "Salário Novo: "+ sal_n)
    }else if (sal_a >= 700.01 && 1500.00){
      va = sal_a * 0.10;
      sal_n = sal_a + va;
      Resposta11.value = ("Salário Atual: "+sal_a+"% Aumento Aplicado: 10% Valor do Aumento: "+ va +"Salário Novo: "+ sal_n)
    }else if (sal_a >= 1500.01){
      va = sal_a * 0.05;
      sal_n = sal_a + va;
      Resposta11.value = ("Salário Atual: "+sal_a+"% Aumento Aplicado: 05% Valor do Aumento: "+ va +"Salário Novo: "+ sal_n)
    }
  }