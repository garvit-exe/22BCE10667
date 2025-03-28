const express = require("express");
const numberid = require("./numberid");
const response = require("./response");

const router = express();

router.get("/:numberid", (req, res) => {
    const found = response.some(
        (number) => number.numberid === req.params.numberid
    );
    res.json(response);
});

module.exports = router;
