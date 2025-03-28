const express = require("express");
const app = express();

const PORT = process.env.PORT || 9876;

app.use("/numbers/", require("./routes/api/numbers"));

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
