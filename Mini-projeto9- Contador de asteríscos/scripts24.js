//Criar uma função que exibe a quantidade de * 
// que aquela linha possui


exibirAsteriscos(10);


function exibirAsteriscos(linhas) {
  /*
let padrao ='';
  
  for(let i = 1; i <= linhas; i++){
    padrao += '*';
        console.log(padrao);
     
  }
  */
 //Outra forma de resolver

  for(let linha = 1; linha <= linhas; linha++){
       let padrao = '';
       for(let i = 0; 1 < linha; i++){
         padrao += '*';
       }
       console.log(padrao);
  }

}
