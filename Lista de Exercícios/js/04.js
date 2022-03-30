// Faça um Programa que verifique se uma letra digitada é vogal ou consoante.
function E4() {
    const letra = window.prompt("Digite uma letra: ");
    let txt = letra.toLowerCase();
    if ( txt == "a" || txt == "e" || txt == "i" || txt == "o" || txt == "u"){
      Resposta4.value = ("A Letra "+ txt +" é uma VOGAL");
    }else{
      Resposta4.value = ("A Letra "+ txt+ " é uma CONSOANTE");
    }
  }