// Faça um Programa que leia três números e mostre-os em ordem decrescente.

function E9() {
    const n1 = parseInt(window.prompt("Digite o primeiro número: "));
    const n2 = parseInt(window.prompt("Digite o segundo número: "));
    const n3 = parseInt(window.prompt("Digite o terceiro número: "));
    if(n1 >= n2 && n1 >=n3 && n2 >= n3){
      Resposta9.value = (n1+", "+n2+", "+n3);
    }else if(n1 >= n2 && n1 >=n3 && n3 >= n2){
      Resposta9.value = (n1+", "+n3+", "+n2);
    }else if(n2 >= n1 && n2 >=n3 && n1 >= n3){
      Resposta9.value = (n2+", "+n1+", "+n3);
    }else if(n2 >= n1 && n2 >= n3 && n3 >= n1){
      Resposta9.value = (n2+", "+n3+", "+n1);
    }else if(n3 >= n1 && n3 >= n2 && n1 >= b){
      resposta9.value = (n3+", "+n1+", "+n2);
    }else if(n3 >= n1 && n3 >= n2 && n2 >= n1){
      resposta9.value = (n3+", "+n2+", "+n1);
    }else{
      resposta9.value = "ERRO"
    }
  }