//JavaScript Aula 36 - Natureza dinâmica de objetos

const mouse = {
  cor: 'red',
  marca: 'dazz'
}
mouse.velocidade = 5000;
mouse.trocarDPI = function(){
  console.log('Mudando DPI');
}
delete mouse.velocidade
delete mouse.trocarDPI
delete mouse.cor
console.log(mouse);