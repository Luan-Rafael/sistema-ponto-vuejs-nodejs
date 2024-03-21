class DataBase {
  constructor() {}

  async start() {
    const URI = "neo4j://localhost:7687";
    const USER = "neo4j";
    const PASSWORD = "neo4j123";
    let driver;

    try {
      driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASSWORD));
      return driver;
    } catch (err) {
      console.log(`Connection error\n${err}\nCause: ${err.cause}`);
    }
  }
}

module.exports = new DataBase();
