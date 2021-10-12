const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8081;

app.get('/', (req, res) => {
    res.send({ message: 'Welcome to the Wordpress REST API!' });
});

const corsOptions = {
    origin: 'http://localhost:3000'
}
app.use(cors(corsOptions))

app.use(express.json());
app.use(require('./routes/authentication.route'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})
