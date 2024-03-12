const marcacoes = [];

const usuarios = [];

class RepositoryInMemory {
  async retornaUsuarios() {
    return usuarios;
  }
  async retornaMarcacoes() {
    return marcacoes;
  }
  async criaUsuario(nome) {
    usuarios.push({ id: usuarios.length + 1, nome });
    return { id: usuarios.length, nome };
  }
  async criaMarcacao({
    idUsuario,
    inicioExpediente,
    horaInicioIntervalo,
    horaVoltaIntervalo,
    fimExpediente,
    data,
  }) {
    marcacoes.push({
      id: usuarios.length + 1,
      idUsuario,
      inicioExpediente,
      horaInicioIntervalo,
      horaVoltaIntervalo,
      fimExpediente,
      data,
    });
    return {
      id: usuarios.length,
      idUsuario,
      inicioExpediente,
      horaInicioIntervalo,
      horaVoltaIntervalo,
      fimExpediente,
      data,
    };
  }
  async retornaMarcacoesUsuario(usuario) {
    return marcacoes.filter((elem) => elem.idUsuario == usuario);
  }

  async alteraMarcacao(dados) {
    const index = marcacoes.findIndex((el) => el.id == dados.id);
    marcacoes[index] = dados;
  }

  async deletaMarcacao(id) {
    const index = marcacoes.findIndex((el) => el.id == id);
    marcacoes.splice([index], index + 1);
    return marcacoes;
  }
}

module.exports = RepositoryInMemory;
