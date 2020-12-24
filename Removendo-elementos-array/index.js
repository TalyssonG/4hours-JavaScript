// Removendo elementos array
/*
const numeros = [1,2,3,4,5,6];
numeros.push()
numeros.unshift() //Adiciona um numero no inicio
numeros.splice()

//Remover no Final 
const ultimo = numeros.pop();
console.log(ultimo);
console.log(numeros)

//Remover no inicio
const primeiro = numeros.shift();
console.log(primeiro)
console.log(numeros)

//Remover no meio
const meio = numeros.splice(2,1);
console.log(meio)
*/
//

//ultimo
const Festa = ['Talysson','Petrysson','Perera','Bim'];
const ultimo = Festa.pop();
console.log(Festa)

//meio
const meio = Festa.splice(1,1);
console.log(meio)
console.log(Festa)

//Inicio
const Inicio = Festa.shift();
console.log(Inicio)
console.log(Festa)