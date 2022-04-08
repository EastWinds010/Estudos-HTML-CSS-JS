// Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Sexo: 'f' ou 'm';
// Estado Civil: 's', 'c', 'v', 'd';

let nome = window.prompt("Digite um nome com  mais de 3 caracteres: ");
while(nome.length <= 3){
    nome = window.prompt("Digite um nome com mais de 3 caracteres: ")
}

let idade = window.prompt("Digite a Idade: ");
while(idade <= 0 || idade >= 150){
    nome = window.prompt("Digite uma idade Válida: ");
}

let salario = window.prompt("Digite o Salário: ");
while(salario <= 0){
    salario = window.prompt("Digite um salário Válido: ");
}
let sexo = window.prompt("digite o sexo F: Feminino e M: Masculino: ").toLowerCase();
while(sexo != "f" || sexo != "m"){
    sexo = window.prompt("digite  F p/ Feminino e M p/ Masculino: ").toLowerCase();
}
let estadoC = window.prompt("Digite o estado civil S= Solteiro C= Casado V= Viúvo D= Divorciado").toLowerCase();
while(estadoC != "s" || estadoC != "c" ||estadoC != "v" ||estadoC != "d"){
    estadoC = window.prompt("Digite o estado civil S= Solteiro C= Casado V= Viúvo D= Divorciado").toLowerCase();
}
