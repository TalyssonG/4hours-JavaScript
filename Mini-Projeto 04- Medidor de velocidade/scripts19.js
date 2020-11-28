// Velocidade máxima de até 70
// a cada 5km acima do limite você ganha 1 ponto
// Math.Flor()
// Caso pontos maior que 12 -> "Carteira Suspendida"

verificarVelocidade(100);

function verificarVelocidade(velocidade) {
  const velocidadeMaximna = 70;
  const KmPorPonto = 5;
  if(velocidade <= 70)
     console.log('Ok');
  else {
    const pontos = Math.floor(((velocidade - velocidadeMaximna ) / KmPorPonto ));
    if( pontos >= 12)
      console.log('Carteira suspensa');
  else
      console.log('Pontos', pontos);
  }
    

}














