// Faça um Programa que verifique se uma letra digitada é "F" ou "M".
// Conforme a letra escrever: 
// F - Feminino
// M - Masculino
// Sexo Inválido.
function E3() {
    const sexo = window.prompt("Digite o Sexo(M - Masculino  F- Feminino)");
    if (sexo == "m" || sexo == "M") {
      Resposta3.value = ("Sexo Masculino");
    } else if (sexo == "f" || sexo == "F") {
      Resposta3.value = ("Sexo Feminino");
    } else {
      Resposta3.value = ("Sexo Inválido");
    }
  }