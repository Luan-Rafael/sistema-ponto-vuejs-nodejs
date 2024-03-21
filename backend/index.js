const restify = require("restify");
const corsMiddleware = require("restify-cors-middleware");

const server = restify.createServer({
  name: "api-restify",
  version: "1.0.0",
});

const cors = corsMiddleware({
  origins: ["http://localhost:8080"],
  allowHeaders: [
    "Authorization",
    "Content-Type",
    "access-control-allow-headers",
  ],
});

server.pre(cors.preflight);
server.use(cors.actual);

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

require("./router/router")(server);

server.listen(3000, function () {
  console.log("%s listening at %s", server.name, server.url);
});
