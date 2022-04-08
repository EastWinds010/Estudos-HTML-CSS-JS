// Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e 
// continue pedindo até que o usuário informe um valor válido.
let n = window.prompt("Digite uma nota entre 0 e 10: ");

while(n < 0 || n > 10){
    console.log("Digite um nota Válida");
    n = window.prompt("Digite uma nota entra 0 e 10: ");
}
