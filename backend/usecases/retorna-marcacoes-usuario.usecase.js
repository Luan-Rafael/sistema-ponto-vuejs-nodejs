const Repository = require("../repository");
const RepositoryInMemory = require("../repository-in-memory");

class RetornaMarcacoesUsuarioUseCase {
  #repository;
  /**
   *
   * @param {RepositoryInMemory | Repository} repository
   */
  constructor(repository) {
    this.#repository = repository;
  }

  async execute(usuario) {
    return await this.#repository.retornaMarcacoesUsuario(usuario);
  }
}

module.exports = RetornaMarcacoesUsuarioUseCase;
