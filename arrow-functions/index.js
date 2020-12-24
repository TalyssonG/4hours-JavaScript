const marcas = [
    {id:1, nome:'a'},
    {id:2, nome:'b'}
];

console.log(marcas.find((marca) => {
    return marca.nome === 'b';
}));



//Exercício
const celular = [
    {id:1, cor:'preta', marca: 'Xiaomi'},
    {id:2, marca: 'Sansumg'},
    {id:3, marca: 'apple'},
]

console.log(celular.find((telefone) => {
    return telefone.cor === 'preta'
}))