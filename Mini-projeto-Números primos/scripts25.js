//Criar função para mostrar ps números primos

//primos
//compostos

//Ex: 10
//10 (divisível por 1 ou por ele mesmo)

//10 - 1,2,4,6,10

exibirNumerosPrimos(20);
function exibirNumerosPrimos(limite){
    for(let i = 2; i <= limite; i++){    
       if(NumeroPrimo(i)) console.log(i);
    }
  }
    function NumeroPrimo(i){
        for(let divisor = 2; divisor < i; divisor++){
          if(i % divisor === 0){
            return false;
            
          }
        }
        return true;
    }

