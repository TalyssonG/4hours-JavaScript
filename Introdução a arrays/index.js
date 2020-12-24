//JavaScrit aula 52 introdução a 

//Add novos Elementos------------------
/*
const numeros = [1,2,3];

//Inicio
numeros.unshift(6);
console.log(numeros);
//Meio
numeros.splice(1,0,'a');
console.log(numeros);
//Final
numeros.push(5);
console.log(numeros);
*/

//--------------------------
//Remover Elementos
//Dvidir elementos
//Dividir Arrays
//Combianr arrays


//Encontrando elementos(primitivos)----------------------------
/*
const numeros = [1,2,3,,1,4];
console.log(numeros.indexOf(4) !== -1); //True //Numero não encontrado retornara -1

console.log(numeros.includes(5)); //False

//Encontrando elementos tipos de referência-------------------------------
*/

const marcas = [

    {id:1, nome: 'Talysson'},
    {id:2, nome: 'Gadêlha'},

];

const marca = marcas.find(function(marca){
    return marca.nome === 'Gadêlha';
})

console.log(marca);

//Arrow Functions


