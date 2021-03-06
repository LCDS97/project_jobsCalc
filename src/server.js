const express = require('express');

const server = express();
const routes = require("./routes")

server.set('view engine', 'ejs');

server.use(express.static("public"))

server.use(express.urlencoded({ extended: false }))
server.use(routes)

server.listen(3000, () => console.log('running on port 3000'))