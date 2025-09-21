const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Ryan Elmer");
})

const port = 3000;
app.listen(process.env.PORT || port, () => {
    console.log(`Web server is running at ${process.env.PORT || port}`);
});