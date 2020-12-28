// Operador spread

//Spread
const primeiro = [1,2,3]
const segundo = [4,5,6]
const terceiro = [7,8,9]

const combinado = [...primeiro,...segundo,...terceiro,'Talysson']
console.log(combinado)
const clonado = [...combinado]
console.log(clonado)

//exercício

const first = [1,2,3]
const second = [4,5,6]

const combinar = [...first,'%',...second]
console.log(combinar)