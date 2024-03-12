const Repository = require("../repository");
const RepositoryInMemory = require("../repository-in-memory");

class AlteraMarcacaoUseCase {
  #repository;
  /**
   *
   * @param {RepositoryInMemory || Repository} repository
   */
  constructor(repository) {
    this.#repository = repository;
  }

  async execute(dados) {
    return await this.#repository.alteraMarcacao(dados);
  }
}

module.exports = AlteraMarcacaoUseCase;
