// Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, 
// sabendo que a decisão é sempre pelo mais barato.

function E8() {
    const n1 = parseInt(window.prompt("Digite o valor do primeiro produto: "));
    const n2 = parseInt(window.prompt("Digite o valor do segundo produto: "));
    const n3 = parseInt(window.prompt("Digite o valor do terceiro produto: "));
    let menor = n1
    if(n2 < menor) {
      menor = n2;
    }
    if(n3 < menor) {
      menor = n3;
    }
    Resposta8.value = ("compre o produto de valor: "+ menor+" R$");
  }