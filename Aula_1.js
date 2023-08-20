class Filme{

    constructor(titulo, ano, genero, duracao, assistido){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistido = assistido;
        this.avaliação = null;
    }

    exibirDetalhes(){
        console.log(`Título: ${this.titulo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Gênero: ${this.genero}`);
        console.log(`Duração: ${this.duracao}`);
        console.log(`Assistido: ${this.assistido}`);
        console.log(`Avaliação: ${this.avaliação}\n`);
    }

    marcarAssistido(){
        this.assistido = true;
    }

    avaliarFilme(nota){
        this.avaliação = nota;
    }
}
    
const filme1 = new Filme("O Senhor dos Anéis: A Sociedade do Anel", 2001, "Aventura, epico, fantasia", "3h28", false);
const filme2 = new Filme("O Senhor dos Anéis: As Duas Torres", 2002, "Aventura, epico, fantasia", "3h43", false);
const filme3 = new Filme("O Senhor dos Anéis: O Retorno do Rei", 2003, "Aventura, epico, fantasia", "4h11", false);

filme1.marcarAssistido();
filme1.avaliarFilme(9.5);

filme2.marcarAssistido();
filme2.avaliarFilme(9.5);

filme3.marcarAssistido();
filme3.avaliarFilme(10);

filme1.exibirDetalhes();
filme2.exibirDetalhes();
filme3.exibirDetalhes();
