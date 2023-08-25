const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Filme{

    constructor(titulo, ano, genero, duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistido = 'Não';
        this.avaliacao = null;
    }

    exibirDetalhes(){
        console.log(`\nTítulo: ${this.titulo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Gênero: ${this.genero}`);
        console.log(`Duração: ${this.duracao}`);
        console.log(`Assistido: ${this.assistido}`);
        console.log(`Avaliação: ${this.avaliacao}`);
    }

    marcarAssistido(){
        console.log(`Filme ${this.titulo} assistido`);
        this.assistido = 'Sim';
    }

    avaliarFilme(nota){
        console.log(`Filme ${this.titulo} recebeu nota ${nota}`);
        this.avaliacao = nota;
    }
}

function adicionarFilme(){
    rl.question('\nEntre com o titulo do filme: ', (titulo) => {
        rl.question('Entre com o ano de lançamento: ', (ano) => {
          rl.question('Entre com o gênero: ', (genero) => {
            rl.question('Entre com o duração (em minutos): ', (duracao) => {
                const filme = new Filme(titulo, ano, genero, duracao);
                filmes.push(filme);
                console.log('Filme adicionado');
                menu(); 
            });
          });
        });
    });  
}

function assistirFilme() {
    for (let i = 0; i < filmes.length; i++) {
        console.log(`\n${i+1} - ${filmes[i].titulo}`);
    }
    rl.question('Entre com o número do filme que deseja marcar como assistido: ', (id) => {
        const x = parseInt(id) - 1;
        if (x >= 0 && x < filmes.length) {
            filmes[x].marcarAssistido();
        } else {
            console.log('Valor inválido');
        }
        menu();
    });
    
  }

function darNotaFilme() { 
    for (let i = 0; i < filmes.length; i++) {
        console.log(`\n${i+1} - ${filmes[i].titulo}`);
    }
    rl.question('Entre com o número do filme que deseja avaliar: ', (nota) => {
        const index = parseInt(nota) - 1;
        if (index >= 0 && index < filmes.length) {
            rl.question('Entre com a nota que deseja dar filme: ', (avaliacao) => {
                const nota = parseInt(avaliacao);
                filmes[index].avaliarFilme(nota);
                menu();
            });
        } else {
            console.log('Número de filme inválido');
            menu();
        }
        
    });
    
}

function exibirFilmes() {
    for (let i = 0; i < filmes.length; i++) {
        filmes[i].exibirDetalhes();
    }
    menu();
}

function menu() { 
    console.log(`\n1- Adicionar um novo filme`);
    console.log(`2- Marcar um filme como assistido`);
    console.log(`3- Avaliar um filme`);
    console.log(`4- Exibir a lista de filmes`);
    console.log(`5- Sair do programa`);
    rl.question('Entre com o número da operação desejada: ', (opcao) => {
        switch (opcao) {
            case '1':
                adicionarFilme();
                break;
            case '2':
                assistirFilme();
                break;
            case '3':
                darNotaFilme();
                break;
            case '4':
                exibirFilmes();
                break;
            case '5':
                rl.close();
                break;
            default:
                console.log('Operação inválida');
                menu();
        }
    });
}

const filmes = [];
menu();
