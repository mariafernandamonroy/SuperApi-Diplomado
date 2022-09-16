const jsonServer = requiere("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.josn");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000;

server.use(middlewares);
server.use(router);
server.listen(port);
