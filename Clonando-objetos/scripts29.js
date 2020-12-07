//JavaScript Aula 37 - Clonando objetos

const celular = {
 marcaCelular: 'Apple',
 tamanhoTela: {
        vertical: 155,
        horizontal: 75
 },
 ligar: function () {
      console.log("Fazendo Ligação...");
    }
}


const novoObjeto = Object.assign({
  bateria: 5000,
  cor:'preta'
},celular)
console.log(novoObjeto);
