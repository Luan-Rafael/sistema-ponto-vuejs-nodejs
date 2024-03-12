const Repository = require("../repository");
const RepositoryInMemory = require("../repository-in-memory");

class RetornaUsuarioUseCase {
  #repository;
  /**
   *
   * @param {RepositoryInMemory | Repository} repository
   */
  constructor(repository) {
    this.#repository = repository;
  }

  async execute() {
    return await this.#repository.retornaUsuarios();
  }
}

module.exports = RetornaUsuarioUseCase;
