const express = require("express");
const numberid = require("./numberid");
const response = require("./response");

const router = express();

router.get("/:numberid", (req, res) => {
    const found = response.some(
        (number) => number.numberid === req.params.numberid
    );

    if (found) {
        const updtState = req.body;

        response.forEach((r) => {
            r.windowPrevState = r.windowCurrState
                ? r.windowCurrState
                : r.windowPrevState;
            r.windowCurrState = updtState.numbers
                ? updtState.numbers
                : r.windowCurrState;
            r.numbers = r.windowCurrState;

            const sum = 0;
            r.windowCurrState.forEach((num) => {
                sum = sum + num;
            });
            r.avg = sum / r.windowCurrState.size();
        });
    }
    res.json(response);
});

module.exports = router;
