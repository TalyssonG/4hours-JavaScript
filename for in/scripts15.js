// For in

const pessoa = {
    nome: 'Talysson',
    idade: 25

};
//Key-value
for(let chave in pessoa){
    console.log(chave, pessoa['nome'])
}

const cores = ['vermelho' , 'Azul' , 'verde'];

for (let indice in cores){
    console.log(indice, cores[indice])
}