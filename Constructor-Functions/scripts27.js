
//Pascal Case - UmDoisTresQuatro

function Teclado(MarcaTeclado,TamanhoTeclado,DurabilidadeTeclado) {
   this.MarcaTeclado = MarcaTeclado,
   this.TamanhoTeclado = TamanhoTeclado,
   this.DurabilidadeTeclado = DurabilidadeTeclado,
   this.Digitar = function(){
     console.log("Digitando...");
   }
}

const teclado = new Teclado('Razer',10,3);
console.log(teclado);


//Exercício

function Carro(MarcaCarro,AnoCarro,CorCarro){
  this.MarcaCarro = MarcaCarro,
  this.AnoCarro = AnoCarro,
  this.CorCarro = CorCarro,
  this.InformaçõesDoCarro = function(){
    console.log('Informe');
  }
}

const carro = new Carro('Chevrolet', 2020, 'Vermelho');
console.log(carro);