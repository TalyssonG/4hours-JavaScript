//Igualdade de objetos (exercício)

//Criar dois objetos e comparar

function Endereco(rua, cidade, cep) {
        this.rua = rua,
        this.cidade = cidade,
        this.cep = cep

}

const endereco1 = new Endereco('rua', 'cidade', 'cep') //Primwiro objeto
const endereco2 = new Endereco('rua', 'cidade', 'cep') //Segundo objeto


function SaoIguais(endereco1, endereco2) {
    // Comparar se as propriedades são iguais
    return endereco1.rua === endereco2.rua && endereco1.cidade === endereco2.cidade &&
        endereco1.cep === endereco2.cep
}


   
function TemEnderecoMemoriaIguais(endereco1, endereco2) {
     //Comparando se a Referência do objeto aponta para o mesmo local na memória
    return endereco1 === endereco2;
}



console.log(TemEnderecoMemoriaIguais(endereco1, endereco2));