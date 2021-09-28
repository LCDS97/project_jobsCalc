const express = require('express');

const server = express();
const routes = require("./routes")

server.use(express.static("public"))
server.use(routes)

server.listen(3000, () => console.log('running on port 3000'))