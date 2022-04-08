// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome 
// do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

let login = window.prompt("Digite um Login");
let senha = window.prompt("Digite uma Senha");

while(login == senha){
    console.log("Usuário e Senha não podem ser iguais");
    login = window.prompt("Digite um Login: ");
    senha = window.prompt("Digite uma Senha: ");
}