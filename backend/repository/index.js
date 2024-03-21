const DataBase = require("../database");

class Repository {
  database;
  constructor() {
    database = new DataBase();

    this.database.start();
  }
  retornaUsuarios() {
    this.database;
  }
}

module.exports = Repository;
