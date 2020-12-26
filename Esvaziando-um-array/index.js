//Esvaziando um array
let numeros = [1, 2, 3, 4, 5, 6];
//solução 1
console.log(numeros)
numeros = []
console.log(numeros);

//solução 2
numeros.length = 0;
console.log(numeros)

//solução 3
numeros.splice(0,numeros.length);
console.log(numeros)

//solução 4
while (numeros.length > 0) 
numeros.pop()

