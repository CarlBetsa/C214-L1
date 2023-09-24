const chai = require('chai');
const sinon = require('sinon');
const ListaDeTarefa = require('../src/tarefa.js').ListaDeTarefa;
const Tarefa = require('../src/tarefa.js').Tarefas; 

describe('Testes da Lista', () => {
  let GerenciadorTarefas;
  let consoleSpy;

  beforeEach(() => {
    GerenciadorTarefas = new ListaDeTarefa();
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  //testes para adicionar uma nova tarefa
  it('Teste para adicionar uma nova tarefa', () => {
    const tarefa = new Tarefa('tarefa 1', 'descrição 1', 'a fazer');
    
    GerenciadorTarefas.adicionaTarefa(tarefa);
    
    chai.assert.equal(GerenciadorTarefas.listaDeTarefa.length, 1);
  });

  it('Testa se uma tarefa pode ser adicionada 2 vezes', () => {
    const tarefa = new Tarefa('tarefa 1', 'descrição 1', 'a fazer');

    GerenciadorTarefas.adicionaTarefa(tarefa);
    GerenciadorTarefas.adicionaTarefa(tarefa);

    chai.assert.equal(GerenciadorTarefas.listaDeTarefa.length, 1);
  });

  //testes para visualizar a lista de tarefas
  it('Testa a exibição da lista ', () => {
    const tarefa = new Tarefa('tarefa 1', 'descrição 1', 'a fazer');
    const tarefa2 = new Tarefa('tarefa 2', 'descrição 2', 'a fazer');

    GerenciadorTarefas.adicionaTarefa(tarefa);
    GerenciadorTarefas.adicionaTarefa(tarefa2);
    GerenciadorTarefas.exibeTarefas();

    chai.expect(consoleSpy.getCall(0).args[0]).to.include('tarefa 1');
    chai.expect(consoleSpy.getCall(1).args[0]).to.include('descrição 1');
    chai.expect(consoleSpy.getCall(2).args[0]).to.include('Status: a fazer');
    chai.expect(consoleSpy.getCall(3).args[0]).to.include('tarefa 2');
    chai.expect(consoleSpy.getCall(4).args[0]).to.include('descrição 2');
    chai.expect(consoleSpy.getCall(5).args[0]).to.include('Status: a fazer');
  });

  it('Testa a exibição da lista quando vazia', () => {
    GerenciadorTarefas.exibeTarefas();

    chai.expect(consoleSpy.getCall(0).args[0]).to.include('Nenhuma tarefa encontrada');

  });

  //testes para atualizar o status de uma tarefa
  it('Testa a atualização do status de uma tarefa', () => {
    const tarefa = new Tarefa('tarefa 1', 'descrição 1', 'a fazer');

    GerenciadorTarefas.adicionaTarefa(tarefa);
    GerenciadorTarefas.atualizaTarefa('tarefa 1', 'em andamento');

    chai.expect(GerenciadorTarefas.listaDeTarefa[0].status).to.equal('em andamento');
  });

  it('Testa a atualização de uma tarefa que não existe', () => {
    GerenciadorTarefas.atualizaTarefa('tarefa 1', 'concluida');

    chai.expect(consoleSpy.getCall(0).args[0]).to.include('Tarefa não encontrada');
  });

  //testes para excluir uma tarefa
  it('Testa a exclusão de uma tarefa', () => {
    const tarefa = new Tarefa('tarefa 1', 'descrição 1', 'a fazer');
    const tarefa2 = new Tarefa('tarefa 2', 'descrição 2', 'a fazer');

    GerenciadorTarefas.adicionaTarefa(tarefa);
    GerenciadorTarefas.adicionaTarefa(tarefa2);
    GerenciadorTarefas.excluiTarefa('tarefa 1');

    chai.expect(GerenciadorTarefas.listaDeTarefa.length).to.equal(1);
  });

  it('Testa a exclusão de uma tarefa que não existe', () => {
    GerenciadorTarefas.excluiTarefa('tarefa 1');

    chai.expect(consoleSpy.getCall(0).args[0]).to.include('Tarefa não encontrada');
  });
});
