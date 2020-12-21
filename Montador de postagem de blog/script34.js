//Javascript - objeto postagem de blog (Exercício)


let postagem = {

    titulo: 'Javascript',
    Mensagem: 'Olá Mundo',
    Autor: 'Talysson Gadêlha',
    Visualizações: 1005000,
    Comentarios : [ //Array de informações

        {autor: 'Chris'},
        {mensagem: 'Olá'}
    
    ],
    
}

function estaAovivo(postagem){
    for( let Likedlin in postagem)
    console.log(Likedlin, postagem[Likedlin])
     
}

estaAovivo(postagem)