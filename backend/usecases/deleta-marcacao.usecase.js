const Repository = require("../repository");
const RepositoryInMemory = require("../repository-in-memory");

class DeletaMarcacaoUseCase {
  #repository;
  /**
   *
   * @param {RepositoryInMemory | Repository} repository
   */
  constructor(repository) {
    this.#repository = repository;
  }

  async execute(id) {
    return await this.#repository.deletaMarcacao(id);
  }
}

module.exports = DeletaMarcacaoUseCase;
