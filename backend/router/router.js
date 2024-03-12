const RepositoryInMemory = require("../repository-in-memory");
const RetornaUsuarioUseCase = require("../usecases/retorna-usuario.usecase");
const CriaUsuarioUseCase = require("../usecases/cria-usuario.usecase");
const RetornaMarcacoesUseCase = require("../usecases/retorna-marcacoes.usecase");
const CriaMarcacaoUseCase = require("../usecases/cria-marcacao.usecase");
const RetornaMarcacoesUsuarioUseCase = require("../usecases/retorna-marcacoes-usuario.usecase");
const AlteraMarcacaoUseCase = require("../usecases/altera-marcacao.usecase");
const DeletaMarcacaoUseCase = require("../usecases/deleta-marcacao.usecase");

const repositoryInMemory = new RepositoryInMemory();

module.exports = (router) => {
  router.get("/usuario", async (_, res) => {
    const usecase = new RetornaUsuarioUseCase(repositoryInMemory);
    const data = await usecase.execute();
    res.json(data);
  });

  router.post("/usuario", async (req, res) => {
    const nome = req.body.nomeColaborador;
    const usecase = new CriaUsuarioUseCase(repositoryInMemory);
    const data = await usecase.execute(nome);
    if (data.id) {
      res.status(201);
    } else {
      res.status(204);
    }
    res.json(data);
  });

  router.get("/marcacao", async (_, res) => {
    const usecase = new RetornaMarcacoesUseCase(repositoryInMemory);
    const data = await usecase.execute();
    res.send(data);
  });

  router.get("/marcacao/:usuario", async (req, res) => {
    const usecase = new RetornaMarcacoesUsuarioUseCase(repositoryInMemory);
    const data = await usecase.execute(req.params.usuario);
    res.send(data);
  });

  router.post("/marcacao", async (req, res) => {
    const usecase = new CriaMarcacaoUseCase(repositoryInMemory);
    const data = await usecase.execute(req.body);
    res.send(data);
  });

  router.put("/marcacao", async (req, res) => {
    const usecase = new AlteraMarcacaoUseCase(repositoryInMemory);
    const data = await usecase.execute(req.body);
    res.send(data);
  });

  router.del("/marcacao/:id", async (req, res) => {
    const usecase = new DeletaMarcacaoUseCase(repositoryInMemory);
    const data = await usecase.execute(req.params.id);
    res.send(data);
  });
};
