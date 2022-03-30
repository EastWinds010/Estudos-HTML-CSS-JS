// Faça um Programa que leia três números e mostre o maior e o menor deles.

function E7() {
    const n1 = parseInt(window.prompt("Digite o primeiro número"));
    const n2 = parseInt(window.prompt("Digite o segundo número"));
    const n3 = parseInt(window.prompt("Digite o terceiro número"));
    let maior = n1
    if(n2 > maior) {
      maior = n2
    }
    if(n3 > maior) {
      maior = n3
    }
    let menor = n1
    if (n2 < menor) {
      menor = n2
    }
    if(n3 < menor) {
      menor = n3
    }
    Resposta7.value = ("Maior: "+ maior +" Menor: "+ menor)
  }