// Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. 
// Valide a entrada e permita repetir a operação.
let paisA = window.prompt("Digite a população do Pais A: ");
let txA = window.prompt("Digite a Taxa de Crescimento do País A: ");
let paisB = window.prompt("Digite a população do Pais B: ");
let txB = window.prompt("Digite a Taxa de Crescimento do País B: ");
let n = 0;
while(paisA < paisB){
    paisA = paisA + (paisA*txA);
    paisB = paisB + (paisB*txb);
    n++
}
console.log("Levará "+n+" anos para País B atingir a população de País A" )