class Tarefas{
  constructor(titulo, descricao, status){
    this.titulo = titulo;
    this.descricao = descricao;
    this.status = status;
  }

  mostraInfo(){
    console.log(`Titulo: ${this.titulo}`);
    console.log(`Descricao: ${this.descricao}`);
    console.log(`Status: ${this.status}`);
  }
}

class GerenciadorTarefas{
  constructor() {
    this.listaDeTarefa = [];
  }

  buscaTarefa(tarefaTitulo){
    let index = -1;
    for (let i = 0; i < this.listaDeTarefa.length; i++) {
      if (tarefaTitulo === this.listaDeTarefa[i].titulo) {
        index = i;
        break;
      }
    }
    return index;
  }

  adicionaTarefa(tarefa){
    if (this.buscaTarefa(tarefa.titulo) === -1) {
      this.listaDeTarefa.push(tarefa);
    }
  }

  exibeTarefas(){
    if (this.listaDeTarefa.length === 0) {
      console.log("Nenhuma tarefa encontrada");
      return -1;
    } else {
      this.listaDeTarefa.forEach((tarefa) => {
        console.log(`\nTitulo: ${tarefa.titulo}`);
        console.log(`Descricao: ${tarefa.descricao}`);
        console.log(`Status: ${tarefa.status}`);
      });
    }
  }

  atualizaTarefa(titulo, status){
    let index = this.buscaTarefa(titulo);
    if (index !== -1) {
      this.listaDeTarefa[index].status = status;
    } else {
      console.log("Tarefa não encontrada");
    }
  }

  excluiTarefa(titulo){
    let index = this.buscaTarefa(titulo);
    if (index !== -1) {
      this.listaDeTarefa.splice(index, 1);
    } else {
      console.log("Tarefa não encontrada");
    }
  }
}

module.exports = { ListaDeTarefa: GerenciadorTarefas, Tarefas };
