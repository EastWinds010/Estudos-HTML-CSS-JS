// Faça um Programa que leia três números e mostre o maior deles.

function E6() {
    const n1 = parseInt(window.prompt("Digite o primeiro número"));
    const n2 = parseInt(window.prompt("Digite o segundo número"));
    const n3 = parseInt(window.prompt("Digite o terceiro número"));

    if(n1 > n2 && n1 > n3) {
      Resposta6.value = ("O número "+ n1 +" é o MAIOR");
    }else if(n2 > n1 && n2 > n3) {
      Resposta6.value = ("O número "+ n2 +" é o MAIOR");
    }else if(n3 > n1 && n3 > n2) {
      Resposta6.value = ("O número "+ n3 +" é o MAIOR");
    }else{
      Resposta6.value = ("O números são IGUAIS")
    }
  }