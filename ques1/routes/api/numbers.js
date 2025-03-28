const express = require("express");
const numberid = require("./numberid");
const response = require("./response");
const read = require("./testapi");

const router = express();

router.get("/:numberid", (req, res) => {
    const found = numberid.some(
        (number) => number.numberid === req.params.numberid
    );

    if (found) {
        const updtState = read;

        response.forEach((r) => {
            r.windowPrevState = r.windowCurrState
                ? r.windowCurrState
                : r.windowPrevState;
            r.windowCurrState = updtState ? updtState : r.windowCurrState;
            r.numbers = r.windowCurrState;

            const sum = 0;
            r.numbers.forEach((num) => {
                sum = sum + num;
            });
            r.avg = sum;
        });

        res.json(response);
    } else {
        res.status(404).json({
            msg: `No number-id ${req.params.numberid} found`,
        });
    }
});

module.exports = router;
