const express = require("express");
const app = express();
const route = require("./route");
require('dotenv').config();

app.use(express.json());

app.use('/', route);

const PORT = process.env.PORT
const HOST = process.env.HOST

app.listen(PORT, HOST, () => {
    console.log(`Server is running on: http://${HOST}:${PORT}`);
});
