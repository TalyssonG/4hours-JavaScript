// IF..Else

// Se a hora estiver entre 06:00 até 12:00 : Bom dia!
// Se estiver entre 12:00 até 18:00 : Boa tarde!

let hora = 19;

if(hora >= 6 && hora <= 12){
console.log('São',hora,'Horas, Bom dia!');
}

else if(hora >=12 && hora <=18){
console.log('São',hora,' Horas Boa tarde');
}

else{
console.log('São',hora,'Horas Boa noite')
}
