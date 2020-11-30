//Criar função somar que retorna a
// soma de todos os múltiplos de 3 e 5

//Multiplos de 3
// 3,6,9
//Multiplos de 5
//5,10

//Somando os multiplos

somar(10)
function somar(limite) {
  let multiplosde3 = 0;
  let multiplosde5 = 0;
  for(i = 0; 1<= limite; i++){
    if(1 % 3 === 0)
     multiplosde3 += i;
     if(i % 5 === 0)
     multiplosde5 += i;



  }

  console.log(multiplosde3 + multiplosde5)
}




