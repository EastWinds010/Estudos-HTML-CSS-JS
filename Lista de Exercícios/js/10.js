function E10() {
    const turno = window.prompt("Selecion seu Turno: M - Matutino V-Vespertino N- Noturno").toLocaleLowerCase();
    if(turno == "m"){
      Resposta10.value = ("Bom-Dia");
    }else if(turno == "v"){
      Resposta10.value = ("Boa-Tarde");
    }else if(turno == "n"){
      Resposta10.value = ("Boa-Noite");
    }else{
      Resposta10.value = ("Valor Inválido")
    }
  }