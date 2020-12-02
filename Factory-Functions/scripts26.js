//JavaScript Aula 34- Factory Functions ( FUNÇÃO DE FÁBRICA)
/*
const celular = {
  marcaCelular : 'Xiaomi',
  tamanhoTela : {
       vertical : 155,
       Horizontal : 75
  },
  capacidadeBateria: 5000,
  ligar : function() {
     console.log("Fazendo ligação...")
  }
}

function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
  return {
    marcaCelular,
    tamanhoTela,
    capacidadeBateria,
    ligar() {
       console.log("Fazendo ligação...")
    }
  }
}

criarCelular('Iphone', 5.5,5000);
console.log(celular);
*/

//Minha prática
const teclado = {
  MarcaTeclado : 'Redragon',
  TamanhoTeclado : {
    width : 55,
    height: 18 
  },

  DurabilidadeTeclado : 3,
  Digitar : function () {
    console.log("Digitando")
  },
  
  DataFabricação : 2020,
  Digitar1 : function () {
    console.log("Digitando1")
  },
}

function CriarTeclado(MarcaTeclado, TamanhoTeclado, DurabilidadeTeclado, DataFabricação){
  return{
    MarcaTeclado,
    TamanhoTeclado,
    DurabilidadeTeclado,
    DataFabricação,
    

    DataFabricação : 2028,
    Digitar1 : function () {
      console.log("Digitando1")
    },
  }
}

const celular = CriarTeclado('Razer', 55,'3 anos' );
console.log(celular);