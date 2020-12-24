// Construtor Function {Exercício}

// Criar um objeto Postagem
// Titulo, mensagem, autor, visualizações, comentarios[], es

function Postagem (titulo,mensagem, autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [
    
    ],
    
    this.estaAovivo = false
}

let postagem = new Postagem('JavaScript', 'Olá' ,'Talysson', 200);
console.log(postagem);