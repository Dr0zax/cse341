import express from "express";
import routes from "./routes/index.js";

const app = express();

app.use("/", routes);

const port = 3000;
app.listen(process.env.PORT || port, () => {
    console.log(`Web server is running at http://127.0.0.1:${process.env.PORT || port}`);
});
