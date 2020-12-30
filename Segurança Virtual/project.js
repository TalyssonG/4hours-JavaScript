function VerificarEntrada(){
     NomeConvidado = document.getElementById('nome').value;
     ConvidadosCristian = ['Amanda', 'Sabrina', 'Rafael', 'Jonas', 'Carol', 'Jhonatan']
    if (ConvidadosCristian.includes(NomeConvidado)){
        document.getElementById('PermissaoDeEntrada').innerText = 'Você pode Entrar!'

    } else {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você não pode entrar'

    }
}