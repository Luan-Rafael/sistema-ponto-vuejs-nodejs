const Repository = require("../repository");
const RepositoryInMemory = require("../repository-in-memory");

class CriaUsuarioUseCase {
  #repository;
  /**
   *
   * @param { RepositoryInMemory } repository
   */
  constructor(repository) {
    this.#repository = repository;
  }

  async execute(nome) {
    return await this.#repository.criaUsuario(nome);
  }
}

module.exports = CriaUsuarioUseCase;
