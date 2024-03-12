const Repository = require("../repository");
const RepositoryInMemory = require("../repository-in-memory");

class RetornaMarcacoesUseCase {
  #repository;
  /**
   *
   * @param {RepositoryInMemory | Repository} repository
   */
  constructor(repository) {
    this.#repository = repository;
  }

  async execute() {
    return await this.#repository.retornaMarcacoes();
  }
}

module.exports = RetornaMarcacoesUseCase;
