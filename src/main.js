const express = require("express");
const app = express();
const route = require("./route");

app.use(express.json());

app.use('/', route);

const PORT = 3000;
const HOST = "127.0.0.1";

app.listen(PORT, HOST, () => {
    console.log(`Server is running on: http://${HOST}:${PORT}`);
});
