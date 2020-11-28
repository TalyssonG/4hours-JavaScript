// Par ou impar
/*
const  tipo = exibirTipo(10);
console.log(tipo);


function exibirTipo(limite){
 
 
  for(let i=1; i <= limite; i++){
  if(i % 2 !== 0)
      console.log('Impar', i);
    else{
  if(limite % 2 !==1)
      console.log('Par', i);
   }
  
  }
}
*/
//Simplificando


exibirTipo(10);
function exibirTipo(limite){
 
 
  for(let i = 0; i <= limite; i++){
  if( i % 2 === 0)
      console.log(i,'Par');
    else{
      console.log(i, 'Impar');
    }
    }
}







