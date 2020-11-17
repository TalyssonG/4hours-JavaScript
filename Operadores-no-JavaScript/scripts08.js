// Operadores Aritiméticos(matemáticos)
// Operadores Atribuição
// Operadores Lógicos
// Operadores Bitwise

/* ------------------------------------------------------------
01- Operadores Aritiméticos(matemáticos)
let salario = 100;

+ , - , * , / , **


console.log(salario + salario);    //200
console.log(salario - salario);    //0
console.log(salario * salario);    //10.000
console.log(salario / salario);    // 1
console.log(5 ** 5);

// ++ --

let idade = 18;

console.log(idade++);   //19

console.log(idade--)    //17
console.log(idade)

*/

/* --------------------------------------------------------------
02 - Operadores de atribuição

let valorTecladoGamer = 100;
// Mesma coisa que valorTecladoGame = valorTecladoGamer + valorTecladoGamer;
// Mesma coisa que valorTecladoGame = valorTecladoGamer - valorTecladoGamer;

valorTecladoGamer += valorTecladoGamer;
//valorTecladoGamer -= valorTecladoGamer;
console.log(valorTecladoGamer);
*/

/*-----------------------------------------------------------------
// 03 - Operadores de igualdade 
// Igualdade estrita    <- Recomendado
console.log(1 === 1);     //true
console.log('1'=== 1);   //False

// Igualdade solta
console.log ( 1 == 1);
console.log ('1'== 1);

*/


/*--------------------------------------------------------
// 04 - Operador Ternário 

// Tem um cliente, 100 premium, comum
let pontos = 130;
let tipo = pontos > 100 ? 'premium' : 'comum';   
console.log(tipo);  //premium

*/

/* ----------------------------------------------------------
// 05 - Operadores Lógicos
// Operador Lógico e (&&)
// Retorna TRUE se os dois operandos forem true

//console.log(true && true);  //true

//let maiorDeIdade = true;
//let possuiCarteiraDeTrabalho = true;
//let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

//console.log(podeAplicar)


//Operador Lógico ou (||)
// Retornar true se um dos operandos forem true
let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;

console.log('Pode aplicar', podeAplicar)

//Operador NOT(!)
let candidadoRecusado = !podeAplicar;

console.log('Candidado Recusado', candidadoRecusado);

-----------------------------------------------------------------*/