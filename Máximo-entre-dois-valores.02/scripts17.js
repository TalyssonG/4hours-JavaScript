// Atividade 01: Escreva uma função que usa 2 números e retorna o maior entre eles

/*
let n1 = 1;
let n2 = 10;
function maiorValor(soma){
   soma = n1 + n1;
};

if(n1 > n2){
console.log('O maior valor foi',n1 ,'E o menor',n2 );
}else{
console.log('O maior valor foi',n2, 'E o menor', n1);
}

*/
// ----------------------------------

//Usando return

let max = maiorValor(10,15);
console.log(max);

function maiorValor(n1, n2){

    if(n1 > n2)
        return n1; 
        return n2;

      
      // Ou :
      // return n1 > n2 ? n1 : n2 ;
    
}








    
    

    




