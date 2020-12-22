//Faixa de preço


let Faixas = [
    { tooltip: 'até R$700', minimo: 0, maximo: 700 },
    { tooltip: 'de R$700 a R$1000', minimo: 700, maximo: 1000 },
    { tooltip: 'R$1000 ou mais', minimo: 1000, maximo: 999999 }
];

//Segunda opção {fatory function}

function criaFaixaPreco(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

const faixas2 = [
    criaFaixaPreco('1000', '2000', '1'),
    criaFaixaPreco('2000', '3000', '2'),
    criaFaixaPreco('3000', '4000', '3'),
]
console.log(Faixas);
console.log(faixas2);