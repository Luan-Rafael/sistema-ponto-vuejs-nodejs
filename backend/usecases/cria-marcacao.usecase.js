const Repository = require("../repository");
const RepositoryInMemory = require("../repository-in-memory");

class CriaMarcacaoUseCase {
  #repository;
  /**
   *
   * @param {RepositoryInMemory || Repository} repository
   */
  constructor(repository) {
    this.#repository = repository;
  }

  async execute({
    idUsuario,
    inicioExpediente,
    horaInicioIntervalo,
    horaVoltaIntervalo,
    fimExpediente,
    data,
  }) {
    return await this.#repository.criaMarcacao({
      idUsuario,
      inicioExpediente,
      horaInicioIntervalo,
      horaVoltaIntervalo,
      fimExpediente,
      data,
    });
  }
}

module.exports = CriaMarcacaoUseCase;
