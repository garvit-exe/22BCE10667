const express = require("express");
const ans = express();
const read = [];

ans.get("http://20.244.56.144/test/primes", (req, res) => {
    read = req.body.numbers;
});

module.exports = read;
