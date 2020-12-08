//Math.ramdom()
//ex: 0.462954...
//Ele vai gerar um número aléatorio entre 0 e 1



//Math.max(3,4,5,6)
//Vai dizer o maior valor

//Math.min(1,2,3,4)
//Vai dizer o menor valor

//Exercício

var ar = [2,4,9];

var max = ar.reduce(function(a,b) {
  return Math.max(a,b);
});
 
console.log(max);

//Resposta: 9