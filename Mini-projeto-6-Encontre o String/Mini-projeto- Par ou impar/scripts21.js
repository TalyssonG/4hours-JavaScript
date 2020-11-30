// Criar um método para ler propriedades de um objeto e
// exibir somente as propriedades do tipo string que estão nesse objeto

const filme = {
  nome:'talysson',
  Idade:17,
  Nacionalidade: 'Brasileiro'
}

exibirPropriedades(filme);
function exibirPropriedades(obj){
  for(prop in obj)
  if(typeof obj[prop] === 'string')
    console.log(prop,obj[prop])
  

}






