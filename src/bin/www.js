const http = require("http");
const app = require("../api/index");
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server Running ON Port ${PORT}`);
});
