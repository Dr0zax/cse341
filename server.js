import express from 'express'
import connect from './db/connect.js'
import routes from './routes/index.js'

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

app.use("/", routes);

connect.mongoConnect((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port)
        console.log(`Server is running on http://localhost:${port}`);
    }
});
