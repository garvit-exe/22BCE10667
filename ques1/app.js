const express = require("express");
const app = express();

const PORT = process.env.PORT || 9876;

app.use("/numbers/", "./routes/api/numbers");
