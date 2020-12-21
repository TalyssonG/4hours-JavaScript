// Javascript - Objeto Endereço

//crir um objeto endereço que contem:
//Rua
//cep
//exibirendereco(endereco)
/*

let endereco = {
    Rua: 'Curupira',
    Cidade: 'ocara',
    Cep: 6275000,
   
}

function exibirEndereco(endereco) {
    for(let chave in endereco)
    console.log(chave, endereco[chave])
}

exibirEndereco(endereco)
*/
//exercício

let teclado = {
    Marca: 'Redragon',
    Cor: 'Branca',
    Rgb: 'vermelho',
    Tamanho: 50,
    Ano: 2020

}

function exibirTeclado(teclado) {
    for(let keyboard in teclado)
      console.log(keyboard, teclado[keyboard])
}


exibirTeclado(teclado);